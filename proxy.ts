import { NextResponse, type NextRequest } from 'next/server';

const apex = 'ecommercevirtualassistant.com';
export function proxy(request: NextRequest) {
  const host = (request.headers.get('x-forwarded-host') || request.headers.get('host') || '').split(':')[0].toLowerCase();
  const forwardedProto = request.headers.get('x-forwarded-proto')?.split(',')[0].trim().toLowerCase();
  const isProductionHost = host === apex || host === `www.${apex}`;
  if (isProductionHost && (host.startsWith('www.') || forwardedProto === 'http')) {
    const destination = request.nextUrl.clone();
    destination.protocol = 'https:';
    destination.host = apex;
    destination.port = '';
    return NextResponse.redirect(destination, 308);
  }
  return NextResponse.next();
}

export const config = { matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'] };
