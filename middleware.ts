import createMiddleware from 'next-intl/middleware';
import {locales} from './i18n';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Явный редирект с / на /en
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  if (pathname === '/') {
    return NextResponse.redirect(new URL('/en', request.url));
  }
  // Используем next-intl middleware для остального
  return createMiddleware({
    locales,
    defaultLocale: 'en',
    localePrefix: 'always',
  })(request);
}

export const config = {
  matcher: [
    '/',
    '/(ru|en)/:path*',
    '/((?!api|_next|_vercel|favicon\\.ico|sitemap\\.xml|robots\\.txt|.*\\.[a-zA-Z0-9]+$).*)'
  ]
}; 