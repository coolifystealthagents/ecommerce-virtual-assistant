import { NextResponse, type NextRequest } from 'next/server';
import { canonicalRedirectUrl } from './lib/canonical-request';

export function proxy(request: NextRequest) {
  const destination = canonicalRedirectUrl(request.nextUrl, request.headers);
  return destination ? NextResponse.redirect(destination, 308) : NextResponse.next();
}

export const config = { matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'] };
