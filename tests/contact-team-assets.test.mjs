import test from 'node:test';
import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';

const root = new URL('..', import.meta.url).pathname;
const read = (file) => readFileSync(join(root, file));
const text = (file) => read(file).toString('utf8');
const sha256 = (file) => createHash('sha256').update(read(file)).digest('hex');

test('contact team media is checksum-pinned to the approved StealthAgents originals', () => {
  const provenance = JSON.parse(text('app/contact-asset-provenance.json'));
  assert.deepEqual(provenance.teamPhoto, {
    source: 'https://stealthagents.com/team-bacolod.jpg',
    localPath: '/images/team-bacolod.jpg',
    width: 953,
    height: 540,
    sha256: 'e80f0e94a80f5ddceba7fbcf723774689e47089bce7981c9f2bdb4205ea52767',
    approval: 'Explicitly approved user-provided StealthAgents source URL; exact original bytes independently verified',
  });
  assert.deepEqual(provenance.logo, {
    source: 'https://stealthagents.com/stealth-agents-logo-black.png',
    localPath: '/images/stealth-agents-logo-black.png',
    width: 149,
    height: 50,
    sha256: 'bc5b225c1bf37d71ab282bc6d59b519e717263a8ecddd2423225a56d47416e45',
    approval: 'Explicitly approved user-provided StealthAgents source URL; exact original bytes independently verified',
  });
  assert.deepEqual(provenance.managedServiceEvidence, {
    source: 'https://stealthagents.com/services',
    approvedEvidence: 'Existing first-party Stealth Agents website',
    quote: 'A managed virtual assistant agency gives you role scoping, vetted candidates, onboarding guidance, performance oversight, and replacement support in one place.',
    supports: ['role scoping', 'vetted candidates', 'onboarding guidance', 'performance oversight', 'replacement support'],
  });
  assert.equal(sha256('public/images/team-bacolod.jpg'), provenance.teamPhoto.sha256);
  assert.equal(sha256('public/images/stealth-agents-logo-black.png'), provenance.logo.sha256);
});

test('approved team proof remains directly after the first-fold form composition without identity-altering crop', () => {
  const page = text('app/contact-us/page.tsx');
  const css = text('app/contact-us/contact.css');
  assert.match(page, /<LeadForm source="contact-page-consultation" \/><\/div>\s*<\/section>\s*<section className="parent-brand-section">/);
  assert.match(page, /src="\/images\/team-bacolod\.jpg"/);
  assert.match(page, /alt="Stealth Agents team gathered in front of Bacolod City Government Center"/);
  assert.match(page, /width=\{953\}\s+height=\{540\}/);
  assert.match(page, /sizes="\(max-width: 1050px\) 100vw, 54vw"/);
  assert.match(page, /src="\/images\/stealth-agents-logo-black\.png" alt="Stealth Agents" width=\{149\} height=\{50\}/);
  assert.doesNotMatch(page, /team-bacolod\.jpg"[^>]*\bfill\b/);
  assert.match(page, /Official team, Bacolod/);
  assert.match(page, /role scoping, vetted candidates, onboarding guidance, performance oversight, and replacement support/);
  assert.match(css, /\.parent-team img\{[^}]*height:auto[^}]*aspect-ratio:953\/540[^}]*object-fit:contain/);
  assert.doesNotMatch(css, /\.parent-team img\{[^}]*object-fit:cover/);
});
