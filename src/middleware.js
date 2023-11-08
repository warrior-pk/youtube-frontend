import { NextResponse } from 'next/server';
import { isAuthenticated } from './db/firebase';
export async function middleware(request) {
  const path = request.nextUrl.pathname;

  const isPublicPath =
    path === '/login' ||
    path === '/signup' ||
    path === '/verifyemail' ||
    path === '/forgot-password';
  const authenticated = await isAuthenticated();
  console.log('authenticated ', authenticated);
  if (isPublicPath) {
    console.log('from middleware: public');
    // return NextResponse.redirect(new URL('/', request.nextUrl));
  } else {
    console.log('from middleware: protected');
    // return NextResponse.redirect(new URL('/login', request.nextUrl));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/',
    '/home/:path*',
    '/notifications/:path*',
    '/inbox/:path*',
    '/profile/:path*',
    '/settings/:path*',
    '/match/:path*',
    '/login',
    '/signup',
    '/forgot-password',
    '/api/:path*',
  ],
};
