import { NextResponse as response } from 'next/server';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
const { auth, db } = require('@/db/firebase');
import { setDoc, doc } from 'firebase/firestore';

export async function POST(req) {
  console.log('from signup api');
  const { displayName, email, password } = await req.json();
  const res = await createUserWithEmailAndPassword(auth, email, password);
  auth.currentUser
    .getIdToken(true)
    .then((token) => {
      console.log(token);
    })
    .catch((err) => {
      console.log(err);
    });

  await updateProfile(res.user, {
    displayName,
    email,
    photoURL: '',
    profileCompleted: false,
  });

  await setDoc(doc(db, 'users', res.user.uid), {
    uid: res.user.uid,
    email,
    displayName,
    handle: '',
    photoURL: '',
    dob: '',
    bio: '',
    gender: '',
    location: '',
    intrested_in: '',
    tags: [],
    accounts: [],
    matches: [],
    match_requests: [],
  });
  await setDoc(doc(db, 'notifications', res.user.uid), {
    uid: res.user.uid,
    items: [
      {
        type: '',
        read: false,
        date: '',
        from: '',
        to: '',
        match: false,
        match_id: '',
      },
    ],
  });
  return new response({ status: 200 });
}
