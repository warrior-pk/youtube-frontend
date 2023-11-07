import { NextResponse } from 'next/server';

export async function middleware(request) {
  const path = request.nextUrl.pathname;

  const isPublicPath =
    path === '/login' ||
    path === '/signup' ||
    path === '/verifyemail' ||
    path === '/forgot-password';

  if (isPublicPath) {
    console.log('from middleware: public');
  } else {
    console.log('from middleware: protected');
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
  ],
};
