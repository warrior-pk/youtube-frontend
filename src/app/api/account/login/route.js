import { NextResponse as response } from 'next/server';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/db/firebase';
export async function POST(req) {
  const { email, password } = await req.json();
  await signInWithEmailAndPassword(auth, email, password);

  return new response({ status: 200 });
}
