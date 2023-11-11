import React from 'react';

const ProfleLoading = () => {
  return (
    <div className='flex h-full flex-col'>
      <div className='profile-header relative flex flex-col'>
        <div className='flex flex-col items-center gap-5 py-2'>
          <div
            className={`h-32 w-32 animate-pulse rounded-full bg-[url(/assets/dp-skelton.webp)] bg-contain md:h-52 md:w-52`}
          ></div>
          <div className='w-28 animate-pulse rounded-md bg-slate-300 p-2'></div>
          <hr class='my-8 h-px w-full border-0 bg-gray-300 '></hr>
        </div>
      </div>
      <div class='scrollable grid grid-cols-1 gap-4 p-4 sm:grid-cols-2 md:grid-cols-3 '>
        <div class='aspect-square animate-pulse bg-slate-300'></div>
        <div class='aspect-square animate-pulse bg-slate-300'></div>
        <div class='aspect-square animate-pulse bg-slate-300'></div>
        <div class='aspect-square animate-pulse bg-slate-300'></div>
        <div class='aspect-square animate-pulse bg-slate-300'></div>
        <div class='aspect-square animate-pulse bg-slate-300'></div>
        <div class='aspect-square animate-pulse bg-slate-300'></div>
        <div class='aspect-square animate-pulse bg-slate-300'></div>
        <div class='aspect-square animate-pulse bg-slate-300'></div>
        <div class='aspect-square animate-pulse bg-slate-300'></div>
        <div class='aspect-square animate-pulse bg-slate-300'></div>
        <div class='aspect-square animate-pulse bg-slate-300'></div>
      </div>
    </div>
  );
};

export default ProfleLoading;
