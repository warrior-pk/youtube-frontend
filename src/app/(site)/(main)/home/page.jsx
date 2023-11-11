'use client';
import React from 'react';
import { toast } from 'react-hot-toast';
import CreatePost from '@/components/home/CreatePost';

const Page = () => {
  return (
    <div className='flex w-full flex-col'>
      <CreatePost />
    </div>
  );
};

export default Page;
