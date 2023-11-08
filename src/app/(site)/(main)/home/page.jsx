'use client';
import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { AuthContext } from '@/context/authContext';
import { toast } from 'react-hot-toast';
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
  return <></>;
};

export default Page;
