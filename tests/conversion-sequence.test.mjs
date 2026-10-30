import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';

const read = (path) => readFileSync(new URL(`../${path}`, import.meta.url), 'utf8');
const form = read('components/LeadForm.tsx');
const route = read('app/api/submit-lead/route.ts');
const contact = read('app/contact-us/page.tsx');
const thankYou = read('app/thank-you/page.tsx');
const whatsNext = read('app/thanks-whats-next/page.tsx');
const embed = read('components/OnceHubEmbed.tsx');
const layout = read('app/layout.tsx');
const config = read('next.config.mjs');

const names = [...form.matchAll(/name=["']([^"']+)["']/g)].map((match) => match[1]);

// Preserve the established conversion contract while changing only the post-success experience.
test('contact form preserves fields, endpoint, confirmed-success redirect, and failure behavior', () => {
  assert.deepEqual(names, [
    'first_name', 'last_name', 'email', 'phone_country', 'phone', 'company',
    'company_website', 'company_size', 'positions_to_fill', 'referral_source',
    'name', 'email', 'referral_source', 'message', 'source', 'website_url',
  ]);
  assert.match(form, /fetch\(['"]\/api\/submit-lead['"],\s*\{\s*method:\s*['"]POST['"],\s*body:\s*data/);
  assert.match(form, /if\s*\(!response\.ok\s*\|\|\s*!result\.ok\)/);
  assert.match(form, /router\.push\(['"]\/thank-you['"]\)/);
  assert.match(form, /setError\(result\.message/);
  assert.doesNotMatch(form, /\.reset\s*\(/);
  assert.match(route, /if\s*\(!delivered\)\s*return reject/);
  assert.match(route, /NextResponse\.json\(\{\s*ok:\s*true\s*\}\)/);
  assert.doesNotMatch(contact, /go\.oncehub\.com|OnceHubEmbed|SOIDIV_/);
});

test('thank-you is directly accessible and uses the supported OnceHub embed with fallback', () => {
  assert.doesNotMatch(thankYou, /cookies\(|redirect\(/);
  assert.match(thankYou, /<OnceHubEmbed\s*\/>/);
  assert.match(embed, /data-so-page=["']StealthAgentsTeam["']/);
  assert.match(embed, /id=["']SOIDIV_StealthAgentsTeam["']/);
  assert.match(embed, /https:\/\/cdn\.oncehub\.com\/mergedjs\/so\.js/);
  assert.match(embed, /https:\/\/go\.oncehub\.com\/StealthAgentsTeam/);
  assert.match(embed, />Open the scheduler in a new tab</);
  assert.doesNotMatch(embed, /setTimeout|booking.*complete|router\.push|window\.location/);
  assert.doesNotMatch(thankYou, /You are booked|booking confirmed/i);
});

test('booking completion page is neutral on direct navigation and contains no conversion side effects', () => {
  assert.match(whatsNext, /What happens after you book/);
  assert.match(whatsNext, /If you reached this page directly/);
  assert.match(whatsNext, /href=["']\/contact-us["']/);
  assert.doesNotMatch(whatsNext, /You are booked|booking confirmed|consultation is on the calendar/i);
  assert.doesNotMatch(whatsNext, /\b(?:localStorage|sessionStorage|cookies|redirect|fetch)\s*\(|\brouter\s*\./i);
});

test('metadata and CSP support the sequence without weakening unrelated protections', () => {
  assert.match(thankYou, /alternates:\s*\{\s*canonical:\s*['"]\/thank-you['"]\s*\}/);
  assert.match(whatsNext, /alternates:\s*\{\s*canonical:\s*['"]\/thanks-whats-next['"]\s*\}/);
  assert.match(layout, /acr-tracker-config/);
  assert.match(config, /script-src[^"\n]*https:\/\/cdn\.oncehub\.com/);
  assert.match(config, /frame-src[^"\n]*https:\/\/go\.oncehub\.com/);
  assert.match(config, /frame-ancestors 'none'/);
});
