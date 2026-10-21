const APEX_HOST = 'ecommercevirtualassistant.com';

function firstHeaderValue(value: string | null) {
  return value?.split(',')[0].trim().toLowerCase() || '';
}

function cloudflareVisitorScheme(value: string | null) {
  if (!value) return '';
  try {
    const scheme = JSON.parse(value)?.scheme;
    return scheme === 'http' || scheme === 'https' ? scheme : '';
  } catch {
    return '';
  }
}

export function canonicalRedirectUrl(requestUrl: URL, headers: Pick<Headers, 'get'>) {
  const host = firstHeaderValue(headers.get('x-forwarded-host') || headers.get('host')).split(':')[0];
  const isProductionHost = host === APEX_HOST || host === `www.${APEX_HOST}`;
  if (!isProductionHost) return null;

  const visitorScheme = cloudflareVisitorScheme(headers.get('cf-visitor'))
    || firstHeaderValue(headers.get('x-forwarded-proto'));
  if (host === APEX_HOST && visitorScheme !== 'http') return null;

  const destination = new URL(requestUrl);
  destination.protocol = 'https:';
  destination.host = APEX_HOST;
  destination.port = '';
  return destination;
}
