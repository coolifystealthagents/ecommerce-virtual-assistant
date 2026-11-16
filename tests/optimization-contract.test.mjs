import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import test from 'node:test';

const read = (path) => readFileSync(new URL(`../${path}`, import.meta.url), 'utf8');

test('homepage keeps its consultation CTA inside the bounded desktop first fold', () => {
  const marketing = read('components/Marketing.tsx');
  const css = read('app/globals.css');
  assert.match(marketing, /id="cta-home-hero-bookcall"/);
  assert.match(marketing, /hero-visual photo-media/);
  assert.match(css, /height: calc\(100svh - 178px\)/);
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

test('editorial index heroes keep copy and complete media frames within the desktop fold', () => {
  const css = read('app/globals.css');
  assert.match(css, /editorial-index-hero \{ grid-template-columns: minmax\(0, \.9fr\) minmax\(500px, 1\.1fr\)/);
  assert.match(css, /editorial-index-hero h1 \{ max-width: 680px; font-size: clamp\(2\.8rem, 4\.45vw, 4rem\)/);
  assert.match(css, /editorial-index-hero \.hero-actions \{ margin: 1\.25rem 0 0/);
  assert.match(css, /editorial-index-hero \.split-hero-media \{ min-height: 0; aspect-ratio: 3 \/ 2/);
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

test('mobile article details stack the table of contents and preserve complete hero covers', () => {
  const css = read('app/globals.css');
  assert.match(css, /content-wrap\.article-layout \{ display: block; grid-template-columns: none; width: 100%/);
  assert.match(css, /content-wrap\.article-layout > \.mobile-toc \{ display: block; width: 100%; min-width: 0; max-width: none/);
  assert.match(css, /content-wrap\.article-layout > \.prose \{ width: 100%; min-width: 0; max-width: none/);
  assert.match(css, /article-header \.split-hero-media \{ min-height: 0; aspect-ratio: 1\.9 \/ 1/);
  assert.match(css, /article-header \.article-hero \{ object-fit: contain !important/);
});

test('new hero asset references resolve inside public', () => {
  const assets = [
    'public/images/commerce/home-ecommerce-packing.webp',
    'public/images/commerce/services-order-operations.webp',
    'public/images/commerce/blog-operations-analytics.webp',
    'public/images/commerce/research-evidence-review.webp'
  ];
  for (const asset of assets) assert.equal(existsSync(new URL(`../${asset}`, import.meta.url)), true, asset);
});
