'use client';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import CreatePost from '@/components/home/CreatePost';
import { useAuth } from '@/context/authContext';
const Page = () => {
  const { currentUser, loading } = useAuth();
  const [user, setUser] = useState(currentUser);

  useEffect(() => {
    console.log('loading', loading);
    setUser(currentUser);
  }, [currentUser]);
  return (
    <div className='flex w-full flex-col'>
      <div className='username'>{user ? user.displayName : 'No user'}</div>
      <CreatePost />
    </div>
  );
};

export default Page;
