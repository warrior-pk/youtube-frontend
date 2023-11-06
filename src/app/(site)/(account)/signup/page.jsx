import React from 'react';
import Hero from '@/components/Hero';
import Signup from '@/components/Signup';
const Page = () => {
  return (
    <main>
      <div className='bg-secondary-off '>
        <div className='flex h-screen justify-center'>
          <Hero />
          <Signup />
        </div>
      </div>
    </main>
  );
};

export default Page;
