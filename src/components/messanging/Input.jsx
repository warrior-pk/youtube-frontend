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
        <label htmlFor='file' className='cursor-pointer'>
          {' '}
          <img
            className='h-6 w-6'
            src={Img}
            alt=''
            onLoad={() => console.log('Image loaded')}
          />{' '}
        </label>
        <input
          type='file'
          className='h-0 w-0'
          style={{ position: 'absolute' }}
          id='file'
        />
        <button className='cursor-pointer border-none bg-indigo-500 p-3 text-white'>
          Send
        </button>
      </div>
    </div>
  );
};

export default Input;
