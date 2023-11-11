'use client';
import React, { useState, useEffect } from 'react';
import Profile from '@/components/profile/Profle';
import ProfileLoading from '@/components/profile/ProfileLoading';
const { useAuth } = require('@/context/authContext');

const Page = () => {
  const { currentUser } = useAuth();
  const [loading, setLoading] = useState(true); // Fix: Corrected from 'const { loading, setLoading } = useState(true);'
  const [user, setUser] = useState({
    displayName: currentUser?.displayName,
    email: currentUser?.email,
    photoURL: currentUser?.photoURL,
    uid: currentUser?.uid,
  });

  useEffect(() => {
    setTimeout(() => {}, 6000);
    setUser({
      displayName: currentUser?.displayName,
      email: currentUser?.email,
      photoURL: currentUser?.photoURL,
      uid: currentUser?.uid,
    });
    console.log(user);
    setLoading(false);
  }, [currentUser, loading]);

  return (
    <div className='flex w-full flex-col'>
      {!currentUser && <ProfileLoading />}
      {!loading && currentUser && <Profile user={user} />}
    </div>
  );
};

export default Page;
