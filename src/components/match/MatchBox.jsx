import React from 'react';
import Image from 'next/image';
const age = '20';
const name = 'Prakhar';
const img1 = '/assets/sewy.jpg';
const imageStyle = {
  borderRadius: '2%',
  width: '20rem',
};
const MatchBox = () => {
  return (
    <div className='polaroid flex-col shadow-md'>
      <div className='frame bg-white'>
        <div className='image px-4 pt-4 lg:px-6 lg:pt-4'>
          <Image
            src={img1}
            width={300}
            height={300}
            style={imageStyle}
            loading='lazy'
            alt='Picture of the Person'
          />
        </div>
        <div className='bio text-center font-medium lg:text-xl'>
          {name}, {age}
        </div>
        <div className='button-holder flex justify-between px-4 pb-2 lg:pb-4'>
          <div className='reject '>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              stroke-width='1.5'
              stroke='currentColor'
              class='h-8 w-8 md:h-10 md:w-10 lg:h-10 lg:w-10'
            >
              <path
                stroke-linecap='round'
                stroke-linejoin='round'
                d='M6 18L18 6M6 6l12 12'
              />
            </svg>
          </div>
          <div className='like'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='#d71717'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='#d71717'
              className='h-8 w-8 md:h-10 md:w-10 lg:h-10 lg:w-10'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z'
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MatchBox;
