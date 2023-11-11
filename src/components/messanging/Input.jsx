'use client';
import React from 'react';

const Input = () => {
  const Attach = '/assets/messanging/attach.png';
  const Img = '/assets/messanging/img.png';
  return (
    <div className='flex items-center justify-between bg-white p-3'>
      <input
        type='text'
        placeholder='Type Something...'
        className='w-full border-none bg-transparent text-black placeholder-gray-500 outline-none'
      />
      <div className='flex items-center gap-3'>
        <img className='h-6 cursor-pointer' src={Attach} alt='' />
        <label htmlFor="file" className="cursor-pointer relative">
        <img className="h-6 w-14 " src={Img} alt="" />
        <input
          type="file"
          id="file"
          className="w-0 h-0 absolute top-0 left-0"
        />
        </label>
        <button className="border-none p-3 text-white bg-indigo-500 cursor-pointer">
          Send
        </button>
      </div>
    </div>
  );
};

export default Input;
