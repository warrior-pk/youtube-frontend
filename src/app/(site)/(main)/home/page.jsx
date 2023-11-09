'use client';
import React, { useEffect } from 'react';
import { useContext } from 'react';
import { AuthContext } from '@/context/authContext';
import { toast } from 'react-hot-toast';
import CreatePost from '@/components/home/CreatePost';
const Page = () => {
  const { currentUser: user } = useContext(AuthContext);
  console.log('user ', user);

  useEffect(() => {
    if (user) {
      toast(`Hi, ${user.displayName}`, {
        icon: '👏',
      });
    }
  }, [user]);
  return (
    <div className='flex w-full flex-col'>
      <CreatePost />
    </div>
  );
};

export default Page;
