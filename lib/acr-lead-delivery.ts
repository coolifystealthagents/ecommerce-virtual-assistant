import { randomUUID } from 'node:crypto';

const ACR_TRACK_ENDPOINT = 'https://acrtracking.stealthagents.us/api/track';
const EVA_SITE_ID = 'ecommerce-virtual-assistant';
const DEFAULT_PAGE_URL = 'https://ecommercevirtualassistant.com/contact-us';
const allowedPageOrigins = new Set([
  'https://ecommercevirtualassistant.com',
  'https://www.ecommercevirtualassistant.com',
]);

type AcrLead = {
  source: string;
  first_name: string;
  last_name: string;
  email: string;
  company: string;
  company_website: string;
  company_size: string;
  positions_to_fill: string;
  referral_source: string;
  phone_country: string;
  phone: string;
  message: string;
  page_url: string;
};

type BuildDependencies = {
  id?: () => string;
  now?: () => string;
};

type FetchResult = { ok: boolean; status: number };
type FetchLike = (url: string, init: RequestInit) => Promise<FetchResult>;

function safePageUrl(value: string) {
  try {
    const url = new URL(value);
    return allowedPageOrigins.has(url.origin) ? url : new URL(DEFAULT_PAGE_URL);
  } catch {
    return new URL(DEFAULT_PAGE_URL);
  }
}

export function buildAcrLeadPayload(lead: AcrLead, dependencies: BuildDependencies = {}) {
  const id = dependencies.id ?? randomUUID;
  const now = dependencies.now ?? (() => new Date().toISOString());
  const page = safePageUrl(lead.page_url);
  const metadata = {
    lead_name: `${lead.first_name} ${lead.last_name}`.trim(),
    lead_email: lead.email,
    lead_phone: [lead.phone_country, lead.phone].filter(Boolean).join(' '),
    lead_message: lead.message,
    lead_source: lead.source,
    lead_form_id: 'contact-page-consultation',
    company: lead.company,
    company_website: lead.company_website,
    company_size: lead.company_size,
    positions_to_fill: lead.positions_to_fill,
    referral_source: lead.referral_source,
  };

  return {
    site_id: EVA_SITE_ID,
    events: [{
      client_event_id: id(),
      event_type: 'lead_submit',
      timestamp: now(),
      session_id: id(),
      user_id: id(),
      anonymous_id: id(),
      page_url: page.href,
      page_path: page.pathname,
      page_title: 'Contact Ecommerce Virtual Assistant',
      referrer: '',
      utm_source: '',
      utm_medium: '',
      utm_campaign: '',
      utm_term: '',
      utm_content: '',
      screen_width: 0,
      screen_height: 0,
      scroll_depth: 0,
      time_on_page: 0,
      event_value: lead.source,
      event_metadata: JSON.stringify(metadata),
    }],
  };
}

export async function deliverLeadToAcr(lead: AcrLead, fetchImpl: FetchLike = fetch) {
  try {
    const response = await fetchImpl(ACR_TRACK_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify(buildAcrLeadPayload(lead)),
      cache: 'no-store',
      signal: AbortSignal.timeout(8_000),
    });
    if (!response.ok) console.error('[lead-submit] ACR returned', response.status);
    return response.ok;
  } catch (error) {
    console.error('[lead-submit] ACR delivery failed', error);
    return false;
  }
}
