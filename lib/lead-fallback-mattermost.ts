'use server';

const SITE_ID = 'ecommerce-virtual-assistant';
export interface FallbackLeadPayload { name: string; email: string; phone: string; business?: string; companyWebsite?: string; message?: string; companySize?: string; positions?: string; referral?: string; pageUrl: string; userAgent?: string; }

export async function sendLeadFallbackToMattermost(lead: FallbackLeadPayload): Promise<boolean> {
  const fallbackWebhook = process.env.SITE_MATTERMOST_FALLBACK_WEBHOOK_URL;
  if (!fallbackWebhook) { console.error('[lead-fallback] no durable fallback is configured'); return false; }
  if (looksLikeGarbagePiiLead(lead)) { console.warn('[lead-fallback] garbage_pii_lead_submit; dropped'); return false; }
  const lines = [
    `**[SITE-DIRECT:${SITE_ID}] New lead  -  ${escapeMd(lead.name || lead.email || lead.phone || 'unknown')}**`,
    `_Primary lead delivery was unavailable; this message is the confirmed site fallback_`, '', '| Field | Value |', '|---|---|',
    `| Site | ${escapeMd(SITE_ID)} |`, `| Name | ${escapeMd(lead.name) || '_(empty)_'} |`, `| Email | ${escapeMd(lead.email) || '_(empty)_'} |`,
    `| Phone | ${escapeMd(lead.phone) || '_(empty)_'} |`, `| Business | ${escapeMd(lead.business) || '-'} |`, `| Company website | ${escapeMd(lead.companyWebsite) || '-'} |`,
    `| Company size | ${escapeMd(lead.companySize) || '-'} |`, `| Positions | ${escapeMd(lead.positions) || '-'} |`,
    `| Referral | ${escapeMd(lead.referral) || '-'} |`, `| Page | ${escapeMd(lead.pageUrl) || '-'} |`, `| Time | ${new Date().toISOString()} |`, '',
    lead.message ? `**Message:**\n> ${escapeMd(lead.message).replace(/\n/g, '\n> ')}` : '',
  ].filter(Boolean);
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 7_000);
  try {
    const response = await fetch(fallbackWebhook, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ text: lines.join('\n'), username: `${SITE_ID} Direct (fallback)`, icon_emoji: ':warning:' }), signal: controller.signal, cache: 'no-store' });
    if (!response.ok) { console.error('[lead-fallback] Mattermost returned', response.status); return false; }
    return true;
  } catch (error) { console.error('[lead-fallback] fallback failed', error); return false; }
  finally { clearTimeout(timeout); }
}
function escapeMd(value: string | undefined): string { return value ? String(value).replace(/[|`*_\\]/g, (character) => `\\${character}`).slice(0, 1_000) : ''; }
function looksRandomAlphanumeric(value: string): boolean { if (!value || /\s/.test(value) || !/^[A-Za-z0-9]+$/.test(value)) return false; const letters = value.match(/[A-Za-z]/g) ?? []; const vowels = letters.filter((letter) => 'aeiouAEIOU'.includes(letter)).length; return value.length >= 12 && letters.length >= 8 && (vowels / letters.length < .2 || vowels / letters.length > .6); }
function looksLikeGarbagePiiLead(lead: FallbackLeadPayload): boolean { return looksRandomAlphanumeric((lead.name || '').trim()) && looksRandomAlphanumeric((lead.message || '').trim()); }
