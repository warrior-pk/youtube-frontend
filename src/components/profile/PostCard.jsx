import React from 'react';

const PostCard = () => {
  return (
    <div className='aspect-square max-w-[20rem] justify-self-center rounded-sm shadow-sm'>
      <img
        className='h-full w-full object-cover'
        src='/assets/sewy.jpg'
        alt=''
      />
    </div>
  );
};

export default PostCard;
