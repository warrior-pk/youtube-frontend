import React from 'react';

const Message = ({ message, timestamp, imageUrl }) => {
  return (
    <div className='mb-3 flex gap-10 '>
      {/* <div className='text-black-500 flex flex-col font-light'> */}
      {/* <img
          className="h-12 w-12 rounded-full object-cover"
          src={imageUrl}
          alt="User"
        /> */}
      {/* </div> */}
      <div className='max-w-80 flex flex-col'>
        <p className='max-w-max-content rounded-r-2xl bg-white p-2'>
          {message}
        </p>
        <span className='text-xs font-light'>{timestamp}</span>
      </div>
    </div>
  );
};

export default Message;
