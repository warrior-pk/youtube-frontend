import React from 'react';
import Messages from './Messages';
import Input from './Input';

const Chat = ({ id }) => {
  return (
    <div className='flex w-full flex-col'>
      <div className='chat-header text-lightgray flex items-center justify-between bg-yellow-300 p-3'>
        <span className='text-lg sm:text-xl md:text-2xl lg:text-2xl xl:text-2xl'>
          {`param : ${id}`}
        </span>
      </div>
      <Messages className='scrollable flex grow' />
      <Input className='' />
    </div>
  );
};

export default Chat;
