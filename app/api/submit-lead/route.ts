import { NextResponse } from 'next/server';
import { sendLeadFallbackToMattermost } from '../../../lib/lead-fallback-mattermost';

const personalDomains = new Set(['gmail.com','yahoo.com','hotmail.com','outlook.com','icloud.com','aol.com','proton.me','protonmail.com']);
const allowedOrigins = new Set(['https://ecommercevirtualassistant.com', 'https://www.ecommercevirtualassistant.com']);
const rateWindow = new Map<string, { count: number; reset: number }>();
const MAX_BODY = 64_000;
const MAX_RATE_KEYS = 5_000;
const clean = (value: FormDataEntryValue | string | null, limit = 1_000) => String(value || '').replace(/[\u0000-\u001f\u007f]/g, ' ').trim().slice(0, limit);

function reject(message: string, status = 400) { return NextResponse.json({ ok: false, message }, { status }); }
function allowedOrigin(request: Request) {
  const origin = request.headers.get('origin');
  if (!origin) return false;
  try { return allowedOrigins.has(new URL(origin).origin); } catch { return false; }
}
function withinRateLimit(request: Request) {
  const ip = (request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown').split(',')[0].trim();
  const now = Date.now();
  let entry = rateWindow.get(ip);
  if (entry && entry.reset < now) { rateWindow.delete(ip); entry = undefined; }
  if (!entry) {
    if (rateWindow.size >= MAX_RATE_KEYS) {
      for (const [key, value] of rateWindow) if (value.reset < now) rateWindow.delete(key);
      if (rateWindow.size >= MAX_RATE_KEYS) return false;
    }
    rateWindow.set(ip, { count: 1, reset: now + 10 * 60_000 });
    return true;
  }
  entry.count += 1;
  return entry.count <= 8;
}

class BodyTooLarge extends Error {}
async function readBoundedForm(request: Request, contentType: string) {
  const reader = request.body?.getReader();
  if (!reader) return new FormData();
  const chunks: Uint8Array[] = [];
  let total = 0;
  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    total += value.byteLength;
    if (total > MAX_BODY) { await reader.cancel(); throw new BodyTooLarge(); }
    chunks.push(value);
  }
  const body = new Uint8Array(total);
  let offset = 0;
  for (const chunk of chunks) { body.set(chunk, offset); offset += chunk.byteLength; }
  return new Request(request.url, { method: 'POST', headers: { 'content-type': contentType }, body }).formData();
}

export async function POST(request: Request) {
  const contentType = request.headers.get('content-type') || '';
  const contentLength = Number(request.headers.get('content-length') || '0');
  if (!contentType.toLowerCase().startsWith('multipart/form-data')) return reject('Unsupported form submission.', 415);
  if (!Number.isFinite(contentLength) || contentLength < 0 || contentLength > MAX_BODY) return reject('Submission is too large.', 413);
  if (!allowedOrigin(request)) return reject('Invalid request origin.', 403);
  if (!withinRateLimit(request)) return reject('Please wait before trying again.', 429);

  let form: FormData;
  try { form = await readBoundedForm(request, contentType); }
  catch (error) { return error instanceof BodyTooLarge ? reject('Submission is too large.', 413) : reject('We could not read this form.'); }
  if (form.get('website_url')) return NextResponse.json({ ok: false, ignored: true });

  const source = clean(form.get('source'), 100);
  if (source !== 'contact-page-consultation') return reject('Invalid submission source.');
  const firstName = clean(form.get('first_name'), 100);
  const lastName = clean(form.get('last_name'), 100);
  const email = clean(form.get('email'), 254).toLowerCase();
  const company = clean(form.get('company'), 180);
  const companyWebsite = clean(form.get('company_website'), 500);
  const companySize = clean(form.get('company_size'), 80);
  const positions = clean(form.get('positions_to_fill'), 80);
  const referral = clean(form.get('referral_source'), 120);
  const phone = clean(form.get('phone'), 60);
  const message = clean(form.get('message'), 2_500);
  if (!/^\S+@\S+\.\S+$/.test(email) || !firstName || !lastName || !company || !companySize || !positions || !referral) return reject('Please complete every required field.');
  if (personalDomains.has(email.split('@')[1])) return reject('Please use your business email address.');

  const safePayload = { source, first_name: firstName, last_name: lastName, email, company, company_website: companyWebsite, company_size: companySize, positions_to_fill: positions, referral_source: referral, phone_country: clean(form.get('phone_country'), 20), phone, message, page_url: clean(form.get('_page_url'), 500) || clean(request.headers.get('referer'), 500) };
  let delivered = false;
  const endpoint = process.env.ACR_LEAD_ENDPOINT;
  if (endpoint) {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 8_000);
    try {
      const forwarded = await fetch(endpoint, { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify(safePayload), signal: controller.signal, cache: 'no-store' });
      delivered = forwarded.ok;
      if (!forwarded.ok) console.error('[lead-submit] primary endpoint returned', forwarded.status);
    } catch (error) { console.error('[lead-submit] primary delivery failed', error); }
    finally { clearTimeout(timeout); }
  } else console.error('[lead-submit] ACR_LEAD_ENDPOINT is not configured');

  if (!delivered) delivered = await sendLeadFallbackToMattermost({ name: [firstName, lastName].join(' '), email, phone, business: company, companyWebsite, message, companySize, positions, referral, pageUrl: safePayload.page_url, userAgent: clean(request.headers.get('user-agent'), 500) });
  if (!delivered) return reject('We could not confirm delivery. Please try again in a few minutes.', 503);
  const response = NextResponse.json({ ok: true });
  response.cookies.set('eva_lead_confirmed', 'confirmed', { httpOnly: true, secure: true, sameSite: 'strict', path: '/thank-you', maxAge: 15 * 60 });
  return response;
}
