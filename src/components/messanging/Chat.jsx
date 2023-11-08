import React from 'react';
import Messages from './Messages';
import Input from './Input';

const Chat = () => {
  return (
    <div className="chat-container flex-1 flex flex-col">
      <div className="chat-header h-15 bg-yellow-300 flex items-center justify-between p-3 text-lightgray">
        <span className="text-lg sm:text-xl md:text-2xl lg:text-2.4xl xl:text-2.7xl">PK</span>
        <div className="flex gap-3">
        </div>
      </div>
      <Messages className="h-full sm:h-1" />
      <Input />
    </div>
  );
};

export default Chat;
