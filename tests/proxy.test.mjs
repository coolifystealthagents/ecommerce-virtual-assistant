import assert from 'node:assert/strict';
import test from 'node:test';
import { canonicalRedirectUrl } from '../lib/canonical-request.ts';

function redirect(path = '/', headers = {}) {
  return canonicalRedirectUrl(new URL(`https://ecommercevirtualassistant.com${path}`), new Headers(headers));
}

test('redirects Cloudflare HTTP visitors on apex while preserving path and query', () => {
  const destination = redirect('/contact-us?source=http-check', {
    host: 'ecommercevirtualassistant.com',
    'x-forwarded-proto': 'https',
    'cf-visitor': '{"scheme":"http"}',
  });
  assert.equal(destination?.toString(), 'https://ecommercevirtualassistant.com/contact-us?source=http-check');
});

test('does not redirect canonical HTTPS apex visitors', () => {
  const destination = redirect('/contact-us?source=https-check', {
    host: 'ecommercevirtualassistant.com',
    'x-forwarded-proto': 'https',
    'cf-visitor': '{"scheme":"https"}',
  });
  assert.equal(destination, null);
});

test('canonicalizes www HTTPS visitors without losing path or query', () => {
  const destination = canonicalRedirectUrl(new URL('https://www.ecommercevirtualassistant.com/services?source=www-check'), new Headers({
    host: 'www.ecommercevirtualassistant.com',
    'x-forwarded-proto': 'https',
    'cf-visitor': '{"scheme":"https"}',
  }));
  assert.equal(destination?.toString(), 'https://ecommercevirtualassistant.com/services?source=www-check');
});

test('falls back to forwarded protocol when Cloudflare visitor data is absent or malformed', () => {
  for (const cfVisitor of [undefined, 'not-json', '{"scheme":"ftp"}']) {
    const headers = {
      host: 'ecommercevirtualassistant.com',
      'x-forwarded-proto': 'http',
      ...(cfVisitor ? { 'cf-visitor': cfVisitor } : {}),
    };
    assert.equal(
      redirect('/about?source=fallback', headers)?.toString(),
      'https://ecommercevirtualassistant.com/about?source=fallback',
    );
  }
});

test('ignores canonicalization for non-production hosts', () => {
  const destination = canonicalRedirectUrl(new URL('http://localhost:3000/contact-us'), new Headers({
    host: 'localhost:3000',
    'x-forwarded-proto': 'http',
  }));
  assert.equal(destination, null);
});
