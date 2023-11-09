import React from 'react';

const CreatePost = () => {
  return (
    <div className='create-post flex max-h-20 gap-3 rounded-lg bg-slate-100 p-4 shadow-md'>
      <div className='relative h-11 grow'>
        <input
          placeholder="What's your mood today?"
          className='border-blue-gray-200 text-blue-gray-700 placeholder-shown:border-blue-gray-200 disabled:bg-blue-gray-50 peer h-full w-full border-b bg-transparent pb-1.5 pt-4 font-sans text-sm font-normal outline outline-0 transition-all focus:border-[#ffc629] focus:outline-0 disabled:border-0'
        />
      </div>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width={24}
        height={24}
        viewBox='0 0 24 24'
        style={{
          fill: 'rgba(255, 198, 41, 1)',
          transform: '',
          msfilter: '',
        }}
      >
        <path d='m21.426 11.095-17-8A1 1 0 0 0 3.03 4.242l1.212 4.849L12 12l-7.758 2.909-1.212 4.849a.998.998 0 0 0 1.396 1.147l17-8a1 1 0 0 0 0-1.81z' />
      </svg>
    </div>
  );
};

export default CreatePost;
