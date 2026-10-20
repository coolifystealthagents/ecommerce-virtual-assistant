import assert from 'node:assert/strict';
import { existsSync, readFileSync, readdirSync } from 'node:fs';
import test from 'node:test';

const read = (path) => readFileSync(new URL(`../${path}`, import.meta.url), 'utf8');
const readOptional = (path, fallback = '') => {
  const url = new URL(`../${path}`, import.meta.url);
  return existsSync(url) ? readFileSync(url, 'utf8') : fallback;
};

const shell = read('components/SiteChrome.tsx');
const primaryNav = read('components/PrimaryNav.tsx');
const layout = read('app/layout.tsx');
const contact = read('app/contact-us/page.tsx');
const contactCss = read('app/contact-us/contact.css');
const services = readOptional('lib/service-content.ts');
const servicePage = read('app/services/[slug]/page.tsx');
const blogPage = read('app/blog/[slug]/page.tsx');
const researchPage = read('app/research/[slug]/page.tsx');
const leadRoute = read('app/api/submit-lead/route.ts');
const trackingRoute = read('app/ingest/track/route.ts');
const fallback = read('lib/lead-fallback-mattermost.ts');
const thankYou = read('app/thank-you/page.tsx');
const privacy = read('app/privacy/page.tsx');
const about = read('app/about/page.tsx');
const nextConfig = read('next.config.mjs');
const globals = read('app/globals.css');
const reviews = JSON.parse(readOptional('app/data/review-provenance.json', '{"source":"","records":[]}'));

function countMatches(value, expression) {
  return [...value.matchAll(expression)].length;
}

test('global shell has one subsidiary identity and literal parent attribution in header and footer', () => {
  assert.match(shell, /Powered by StealthAgents/g);
  assert.equal(countMatches(shell, /<ParentAttribution/g), 2);
  assert.match(primaryNav, /Home/);
  assert.match(primaryNav, /Services/);
  assert.match(primaryNav, /Contact Us/);
  assert.match(shell, /<PrimaryNav\s*\/>/);
  assert.deepEqual([...primaryNav.matchAll(/href:\s*'([^']+)'\s*,\s*label:\s*'([^']+)'/g)].map((match) => [match[1], match[2]]), [['/', 'Home'], ['/services', 'Services'], ['/contact-us', 'Contact Us']]);
  assert.match(primaryNav, /usePathname/);
  assert.match(primaryNav, /aria-current/);
  assert.match(primaryNav, /pathname\.startsWith\(`\$\{href\}\/`\)/);
  assert.match(primaryNav, /current === 'exact' \? 'page' : 'location'/);
  assert.match(globals, /\.site-header nav a\[aria-current\]/);
  assert.match(globals, /\.site-header nav a:active/);
  assert.doesNotMatch(shell, /TimedLeadModal|lead-modal-seen|setTimeout/);
  assert.match(layout, /skip-link/);
  assert.match(layout, /<main id="main-content" tabIndex=\{-1\}>/);
  assert.doesNotMatch(read('components/Marketing.tsx'), /<main/);
  assert.match(shell, /persistent-parent-attribution/);
  assert.doesNotMatch(globals, /persistent-parent-attribution[^}]*display:none/);
  assert.match(read('app/globals.css'), /\.split-hero-media\.artwork-media img\{object-fit:contain\}/);
  assert.match(about, /stealth-agents-team\.webp/);
  assert.match(read('components/Marketing.tsx'), /site\.heroImage/);
  assert.match(globals, /position:\s*sticky/);
});

test('contact page owns the required two-step conversion and parent-brand sequence', () => {
  assert.match(contact, /StealthAgents reviews/);
  assert.match(contact, /ReviewsMarquee/);
  assert.match(contact, /Official team, Bacolod/);
  assert.match(contact, /className="official-team-plate"[\s\S]*Official team, Bacolod/);
  assert.match(contact, /stealth-agents-team\.webp/);
  assert.match(contact, /stealth-agents-logo-black\.png/);
  assert.doesNotMatch(contact, /go\.oncehub\.com|booking-frame|consultation-calendar/);
  assert.match(contactCss, /grid-template-columns/);
});

test('ten approved reviews remain distinct and provenance-backed', () => {
  assert.equal(reviews.source, 'https://stealthagents.com/');
  assert.equal(reviews.records.length, 10);
  assert.equal(new Set(reviews.records.map((record) => `${record.name}|${record.body}`)).size, 10);
  assert.ok(reviews.records.every((record) => record.name && record.body && record.headline));
});

test('review marquee renders one record per review and has no playback controls', () => {
  const marquee = read('components/ReviewsMarquee.tsx');
  assert.match(marquee, /requestAnimationFrame/);
  assert.match(marquee, /appendChild/);
  assert.match(marquee, /prefers-reduced-motion/);
  assert.doesNotMatch(marquee, /Play|Pause|Previous|Next|pagination|cloneNode/);
});

test('every service has route-specific long-form content and a distinct hero', () => {
  const slugs = [...services.matchAll(/["']slug["']\s*:\s*["']([^"']+)["']/g)].map((match) => match[1]);
  assert.equal(slugs.length, 6);
  assert.equal(new Set(slugs).size, 6);
  assert.equal(countMatches(services, /["']hero["']\s*:\s*["']\/images\/services\//g), 6);
  for (const key of ['audience', 'problem', 'inputs', 'workflow', 'deliverables', 'boundaries', 'qualityControls', 'scenarios', 'faqs']) {
    assert.equal(countMatches(services, new RegExp(`\\n\\s{4}["']${key}["']\\s*:`, 'g')), 6, `missing ${key}`);
  }
  assert.match(servicePage, /Related services/);
  assert.match(servicePage, /Quality controls/);
  assert.match(servicePage, /What remains with your team/);
});

test('all editorial detail renderers use a complete article shell', () => {
  for (const source of [blogPage, researchPage]) {
    assert.match(source, /ArticleSidebar/);
    assert.match(source, /article-hero/);
    assert.match(source, /heroImage/);
  }
  const sidebar = read('components/ArticleSidebar.tsx');
  assert.match(sidebar, /IntersectionObserver/);
  assert.match(sidebar, /aria-current/);
  assert.match(sidebar, /Related/);
  assert.match(globals, /\.sidebar\{[^}]*max-height:calc\(100vh[^}]*overflow-y:auto/);
});

test('main route families have dedicated hero imagery and unified logo files', () => {
  for (const path of [
    'public/logo.svg',
    'app/icon.svg',
    'public/images/services/services-system.svg',
    'public/images/about-commerce-operations.svg',
    'public/images/blog-field-notes.svg',
    'public/images/research-evidence-desk.svg',
    'public/images/stealth-agents-team.webp',
    'public/images/stealth-agents-logo-black.png',
  ]) assert.ok(existsSync(new URL(`../${path}`, import.meta.url)), `missing ${path}`);
});

test('lead endpoint rejects untrusted or unconfirmed submissions', () => {
  assert.match(leadRoute, /content-length/i);
  assert.match(leadRoute, /content-type/i);
  assert.match(leadRoute, /allowedOrigins/);
  assert.match(leadRoute, /request\.body\?\.getReader/);
  assert.match(leadRoute, /MAX_RATE_KEYS/);
  assert.match(leadRoute, /source\s*!==\s*['"]contact-page-consultation['"]/);
  assert.match(leadRoute, /company_website/);
  assert.match(fallback, /companyWebsite/);
  assert.match(leadRoute, /eva_lead_confirmed/);
  assert.match(thankYou, /eva_lead_confirmed/);
  assert.match(thankYou, /redirect\(['"]\/contact-us/);
  assert.match(privacy, /phone|telephone/i);
  assert.match(privacy, /company website/i);
  assert.match(privacy, /Mattermost/);
  assert.match(leadRoute, /ignored:\s*true/);
  assert.match(leadRoute, /ok:\s*false[^}]*ignored:\s*true/s);
  assert.match(leadRoute, /await sendLeadFallbackToMattermost/);
  assert.doesNotMatch(leadRoute, /void sendLeadFallbackToMattermost/);
  assert.match(trackingRoute, /allowedOrigins/);
  assert.match(trackingRoute, /application\/json/);
  assert.match(trackingRoute, /request\.body\?\.getReader/);
  assert.match(trackingRoute, /MAX_RATE_KEYS/);
  assert.doesNotMatch(trackingRoute, /request\.text\(\)/);
});

test('canonical redirects and security headers are configured', () => {
  assert.match(nextConfig, /headers\s*\(/);
  assert.match(nextConfig, /Strict-Transport-Security/);
  assert.match(nextConfig, /Content-Security-Policy/);
  assert.match(nextConfig, /www\.ecommercevirtualassistant\.com/);
});

test('commercial layouts do not retain decorative labels or promotional overlays', () => {
  const commercial = [shell, contact, servicePage, read('components/Marketing.tsx')].join('\n');
  assert.doesNotMatch(commercial, />0[1-9]</);
  assert.doesNotMatch(commercial, /service-number|step-card[^\n]*<span>/);
  assert.doesNotMatch(commercial, /modal-backdrop|exit-intent|lead-modal/);
});

test('public runtime source contains no forbidden dash punctuation', () => {
  const walk = (url) => readdirSync(url, { withFileTypes: true }).flatMap((entry) => entry.isDirectory()
    ? walk(new URL(`${entry.name}/`, url))
    : /\.(?:ts|tsx|json)$/.test(entry.name) ? [readFileSync(new URL(entry.name, url), 'utf8')] : []);
  const runtime = ['app', 'components', 'lib'].flatMap((directory) => walk(new URL(`../${directory}/`, import.meta.url))).join('\n');
  assert.doesNotMatch(runtime, /[\u2014\u2013]/);
});
