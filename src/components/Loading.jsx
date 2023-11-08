import React from 'react';

const Loading = () => {
  return (
    <div className='flex h-screen justify-center bg-primary-col align-middle'>
      <div className='relative mt-[calc(100vh/2)] h-min animate-pulse px-5 text-3xl font-extrabold text-white md:px-8 lg:text-5xl'>
        Loading&nbsp;...
      </div>
    </div>
  );
};

export default Loading;
