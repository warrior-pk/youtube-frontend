import { NextResponse, NextRequest } from 'next/server';
import { cookies } from 'next/headers';

export async function middleware(request) {
  const path = request.nextUrl.pathname;
  const isPublicPath =
    path === '/login' ||
    path === '/signup' ||
    path === '/verifyemail' ||
    path === '/forgot-password';

  // console.log('Mid: token ', token);
  // if (isPublicPath && token) {
  //   console.log('from middleware: public');
  //   return NextResponse.redirect(new URL('/', request.nextUrl));
  // }
  // if (!isPublicPath && !token) {
  //   console.log('from middleware: protected');
  // return NextResponse.redirect(new URL('/login', request.nextUrl));
  // }
  console.log('middleware');
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
