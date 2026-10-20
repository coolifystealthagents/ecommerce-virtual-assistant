import { NextRequest, NextResponse } from 'next/server';

const TRACKER_ORIGIN = 'https://acrtracking.stealthagents.us';
const MAX_BODY_BYTES = 256 * 1024;
const RATE_WINDOW_MS = 60_000;
const MAX_REQUESTS_PER_WINDOW = 120;
const MAX_RATE_KEYS = 5_000;
const allowedOrigins = new Set([
  'https://ecommercevirtualassistant.com',
  'https://www.ecommercevirtualassistant.com',
]);

type RateEntry = { count: number; resetAt: number };
const rateEntries = new Map<string, RateEntry>();

function jsonError(message: string, status: number) {
  return NextResponse.json({ ok: false, error: message }, { status, headers: { 'Cache-Control': 'no-store' } });
}

function clientKey(request: NextRequest) {
  return request.headers.get('cf-connecting-ip')?.trim()
    || request.headers.get('x-real-ip')?.trim()
    || request.headers.get('x-forwarded-for')?.split(',')[0]?.trim()
    || 'unknown';
}

function rateLimited(key: string) {
  const now = Date.now();
  if (rateEntries.size >= MAX_RATE_KEYS) {
    for (const [entryKey, entry] of rateEntries) if (entry.resetAt <= now) rateEntries.delete(entryKey);
    if (rateEntries.size >= MAX_RATE_KEYS && !rateEntries.has(key)) return true;
  }
  const current = rateEntries.get(key);
  if (!current || current.resetAt <= now) {
    rateEntries.set(key, { count: 1, resetAt: now + RATE_WINDOW_MS });
    return false;
  }
  current.count += 1;
  return current.count > MAX_REQUESTS_PER_WINDOW;
}

async function readBoundedJson(request: NextRequest) {
  const declaredLength = Number(request.headers.get('content-length') || '0');
  if (!Number.isFinite(declaredLength) || declaredLength < 0 || declaredLength > MAX_BODY_BYTES) throw new Error('size');
  const reader = request.body?.getReader();
  if (!reader) throw new Error('body');
  const chunks: Uint8Array[] = [];
  let total = 0;
  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    total += value.byteLength;
    if (total > MAX_BODY_BYTES) {
      await reader.cancel();
      throw new Error('size');
    }
    chunks.push(value);
  }
  const bytes = new Uint8Array(total);
  let offset = 0;
  for (const chunk of chunks) { bytes.set(chunk, offset); offset += chunk.byteLength; }
  const parsed: unknown = JSON.parse(new TextDecoder('utf-8', { fatal: true }).decode(bytes));
  if (!parsed || typeof parsed !== 'object' || Array.isArray(parsed)) throw new Error('shape');
  const root = parsed as Record<string, unknown>;
  if (Object.keys(root).length > 100) throw new Error('shape');
  let nodes = 0;
  const validate = (value: unknown, depth: number): boolean => {
    nodes += 1;
    if (nodes > 2_000 || depth > 10) return false;
    if (typeof value === 'string') return value.length <= 32_000;
    if (value === null || typeof value === 'number' || typeof value === 'boolean') return true;
    if (Array.isArray(value)) return value.length <= 500 && value.every((item) => validate(item, depth + 1));
    if (typeof value === 'object') {
      const entries = Object.entries(value as Record<string, unknown>);
      return entries.length <= 100 && entries.every(([key, item]) => key.length <= 200 && validate(item, depth + 1));
    }
    return false;
  };
  if (!validate(root, 0)) throw new Error('shape');
  return JSON.stringify(root);
}

export async function POST(request: NextRequest) {
  const origin = request.headers.get('origin');
  if (!origin || !allowedOrigins.has(origin)) return jsonError('Origin not allowed.', 403);
  const contentType = request.headers.get('content-type')?.toLowerCase() || '';
  if (!contentType.startsWith('application/json')) return jsonError('JSON required.', 415);
  if (rateLimited(clientKey(request))) return jsonError('Too many requests.', 429);

  let body: string;
  try { body = await readBoundedJson(request); }
  catch { return jsonError('Invalid tracking payload.', 400); }

  try {
    const response = await fetch(`${TRACKER_ORIGIN}/api/track`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body,
      cache: 'no-store',
      signal: AbortSignal.timeout(8_000),
    });
    return new NextResponse(await response.text(), {
      status: response.status,
      headers: { 'Content-Type': response.headers.get('content-type') || 'application/json', 'Cache-Control': 'no-store' },
    });
  } catch {
    return jsonError('Tracking service unavailable.', 502);
  }
}
