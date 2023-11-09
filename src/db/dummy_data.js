import { doc, setDoc } from 'firebase/firestore';
import { db } from '@/db/firebase';
//use this current user as a logged in user for any operation , until auth is not ready
export const currentuser = {
  uid: 'Slkwerfi3rf',
  displayName: 'Piyush Kumar',
  email: 'warriorpk@gmail.com',
  photoURL:
    'https://images.unsplash.com/photo-1570158268183-d296b2892211?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
};
const uid = 'Slkwerfi3rf';
const displayName = 'Piyush Kumar';
const email = 'warriorpk@gmail.com';
const photoURL =
  'https://images.unsplash.com/photo-1570158268183-d296b2892211?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
export const run = async (userChats) => {
  await setDoc(doc(db, 'users', uid), {
    uid,
    displayName,
    email,
    photoURL,
  });

  await setDoc(doc(db, 'userChats', uid), {});
};
