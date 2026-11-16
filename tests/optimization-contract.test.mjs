import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import test from 'node:test';

const read = (path) => readFileSync(new URL(`../${path}`, import.meta.url), 'utf8');

test('homepage keeps its consultation CTA inside the bounded desktop first fold', () => {
  const marketing = read('components/Marketing.tsx');
  const css = read('app/globals.css');
  assert.match(marketing, /id="cta-home-hero-bookcall"/);
  assert.match(marketing, /hero-visual photo-media/);
  assert.match(css, /height: calc\(100svh - 138px\)/);
  assert.match(css, /commerce-ribbon \{ height: 46px/);
});

test('index heroes use repository photography with useful alternative text', () => {
  const files = ['components/Marketing.tsx', 'app/services/page.tsx', 'app/blog/page.tsx', 'app/research/page.tsx'];
  for (const file of files) {
    const source = read(file);
    assert.match(source, /photo-media/);
    assert.doesNotMatch(source, /alt=""[^>]*preload/);
  }
});

test('editorial listings share one landscape media component', () => {
  const component = read('components/EditorialCard.tsx');
  const css = read('app/globals.css');
  assert.match(component, /editorial-card-media/);
  assert.match(component, /sizes=/);
  assert.match(css, /aspect-ratio: 16 \/ 9/);
  assert.match(css, /editorial-card-media img \{ object-fit: cover/);
  for (const file of ['app/blog/page.tsx', 'app/research/page.tsx', 'components/Marketing.tsx']) assert.match(read(file), /<EditorialCard/);
});

test('article pages use one responsive table of contents implementation', () => {
  for (const file of ['app/blog/[slug]/page.tsx', 'app/research/[slug]/page.tsx']) {
    const source = read(file);
    assert.match(source, /<MobileToc items=/);
    assert.match(source, /<ArticleSidebar items=/);
    assert.doesNotMatch(source, /TocSync/);
  }
  const css = read('app/globals.css');
  assert.match(css, /max-height: calc\(100dvh - 124px\)/);
  assert.match(css, /article-layout \.sidebar-toc \{ display: none/);
});

test('new hero asset references resolve inside public', () => {
  const assets = [
    'public/images/stealth-agents-team.webp',
    'public/images/team-bacolod.jpg',
    'public/thumbnails/november-11/ecommercevirtualassistant-control-a-customer-warranty-registration-handoff.png',
    'public/thumbnails/november-11/ecommercevirtualassistant-storage-fee-invoice-variance.png'
  ];
  for (const asset of assets) assert.equal(existsSync(new URL(`../${asset}`, import.meta.url)), true, asset);
});
