'use client';
import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { AuthContext } from '@/context/authContext';
import { signOut } from 'firebase/auth';
import { auth } from '@/db/firebase';

const Page = () => {
  const { currentUser: user } = useContext(AuthContext);
  console.log('user ', user);
  const handleSubmit = (e) => {
    console.log('handle signout');
    signOut(auth);
  };
  return (
    <div>
      Home
      <div className='div'>
        <button onClick={handleSubmit}>Logout</button>
      </div>
      <div>{user && user.displayName}</div>
    </div>
  );
};

export default Page;
