import { NextResponse as response } from 'next/server';
import { signOut } from 'firebase/auth';
import { auth } from '@/db/firebase';
export async function GET(req) {
  await signOut(auth);
  return new response({ status: 200 });
}
