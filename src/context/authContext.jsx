'use client';
import { createContext, useContext, useEffect, useState } from 'react';
import { auth, db } from '@/db/firebase';
import {
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  updateProfile,
} from 'firebase/auth';
import { setDoc, doc } from 'firebase/firestore';
import Loading from '@/components/Loading';

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthContextProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);

  async function login(email, password) {
    signInWithEmailAndPassword(auth, email, password);
    // setUserToken();
  }

  function logout() {
    return signOut(auth);
  }
  // function setUserToken() {
  //   auth.currentUser
  //     .getIdToken(true)
  //     .then((token) => {
  //       cookies().set({
  //         name: 'token',
  //         value: token,
  //         httpOnly: true,
  //       });
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }
  async function signUp(data) {
    const { displayName, email, password } = data;
    const res = await createUserWithEmailAndPassword(auth, email, password);
    // await setUserToken();

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
  }

  function getUser() {
    return auth.currentUser;
  }

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
      console.log(user);
    });

    return () => {
      unsub();
    };
  }, []);

  const value = {
    loading,
    currentUser,
    getUser,
    login,
    logout,
    signUp,
  };

  return (
    <AuthContext.Provider value={value}>
      {loading && <Loading />}
      {!loading && children}
    </AuthContext.Provider>
  );
}
