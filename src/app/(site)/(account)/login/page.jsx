import Hero from '@/components/Hero';
import Login from '@/components/Login';
import React from 'react';

const Page = () => {
  return (
    <main>
      <div className='bg-secondary-off '>
        <div className='flex h-screen justify-center'>
          <Hero />
          <Login />
        </div>
      </div>
    </main>
  );
};

export default Page;
