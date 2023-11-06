import React from 'react';

const Hero = () => {
  return (
    <div
      className='hidden select-none bg-cover shadow-lg lg:block lg:w-2/3'
      style={{
        backgroundImage: 'url(/assets/hero.jpg)',
      }}
    >
      <div className='flex h-full items-center bg-gray-900 bg-opacity-40 px-20'>
        <div>
          <h2 className='text-2xl font-bold text-white sm:text-3xl'>Sphere</h2>
          <p className='mt-3 max-w-xl text-gray-300'>
            Meet Sphere, the fusion of creativity and connection. Share,
            express, and swipe your way to new friendships. Capture, post, and
            connect - all in one place. Join us and spark new connections today!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
