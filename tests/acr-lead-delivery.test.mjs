import assert from 'node:assert/strict';
import test from 'node:test';
import { buildAcrLeadPayload, deliverLeadToAcr } from '../lib/acr-lead-delivery.ts';

const lead = {
  source: 'contact-page-consultation',
  first_name: 'Avery',
  last_name: 'Ng',
  email: 'avery@example.com',
  company: 'Example Commerce',
  company_website: 'https://example.com',
  company_size: '11 to 50',
  positions_to_fill: '2 to 3',
  referral_source: 'Search engine',
  phone_country: '+1',
  phone: '5550100',
  message: 'Order support',
  page_url: 'https://ecommercevirtualassistant.com/contact-us',
};

test('builds the established ACR lead_submit envelope for EVA', () => {
  const payload = buildAcrLeadPayload(lead, {
    id: () => 'fixed-id',
    now: () => '2026-10-20T12:00:00.000Z',
  });

  assert.equal(payload.site_id, 'ecommerce-virtual-assistant');
  assert.equal(payload.events.length, 1);
  const event = payload.events[0];
  assert.equal(event.event_type, 'lead_submit');
  assert.equal(event.event_value, 'contact-page-consultation');
  assert.equal(event.timestamp, '2026-10-20T12:00:00.000Z');
  assert.equal(event.page_url, 'https://ecommercevirtualassistant.com/contact-us');
  assert.equal(event.page_path, '/contact-us');
  assert.equal(event.client_event_id, 'fixed-id');
  const metadata = JSON.parse(event.event_metadata);
  assert.equal(metadata.lead_name, 'Avery Ng');
  assert.equal(metadata.lead_email, 'avery@example.com');
  assert.equal(metadata.lead_source, 'contact-page-consultation');
  assert.equal(metadata.company, 'Example Commerce');
  assert.equal(metadata.company_website, 'https://example.com');
});

test('confirms delivery only after the approved ACR endpoint returns success', async () => {
  const calls = [];
  const fetchImpl = async (url, init) => {
    calls.push({ url, init });
    return { ok: true, status: 202 };
  };
  assert.equal(await deliverLeadToAcr(lead, fetchImpl), true);
  assert.equal(calls.length, 1);
  assert.equal(calls[0].url, 'https://acrtracking.stealthagents.us/api/track');
  assert.equal(calls[0].init.method, 'POST');
  assert.equal(calls[0].init.headers['Content-Type'], 'application/json');
  assert.equal(JSON.parse(calls[0].init.body).events[0].event_type, 'lead_submit');
});

test('does not confirm delivery on an ACR rejection or network error', async () => {
  const originalError = console.error;
  console.error = () => {};
  try {
    assert.equal(await deliverLeadToAcr(lead, async () => ({ ok: false, status: 503 })), false);
    assert.equal(await deliverLeadToAcr(lead, async () => { throw new Error('offline'); }), false);
  } finally {
    console.error = originalError;
  }
});
