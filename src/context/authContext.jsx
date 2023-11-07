'use client';
import { createContext, useEffect, useState } from 'react';
import { auth } from '@/db/firebase';
import { onAuthStateChanged } from 'firebase/auth';
export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [loadingCurrentUser, setLoading] = useState(true);
  const [currentUser, setCurrentUser] = useState(null);

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

  return (
    <AuthContext.Provider value={{ currentUser, loadingCurrentUser }}>
      {children}
    </AuthContext.Provider>
  );
};
