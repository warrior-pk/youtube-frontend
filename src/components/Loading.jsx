import React from 'react';

const Loading = () => {
  return (
    <div className='full-height flex items-center justify-center bg-primary-col'>
      <div className='h-min animate-pulse px-5 text-3xl font-extrabold text-white md:px-8 lg:text-5xl'>
        Loading&nbsp;...
      </div>
    </div>
  );
};

export default Loading;
