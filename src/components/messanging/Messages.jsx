import React from 'react';
import Message from './Message';

const Messages = () => {
  const messages = [
    {
      id: 1,
      message: 'Hello, how are you?',
      timestamp: 'early',
      imageUrl: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80',
    },
    {
      id: 2,
      message: 'I am doing well, thank you!',
      timestamp: '4 min ago',
      imageUrl: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80',
    },
    {
      id: 3,
      message: 'I am doing well, thank you!',
      timestamp: '3 min ago',
      imageUrl: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80',
    },
    {
      id: 4,
      message: 'I am doing well, thank you!',
      timestamp: '2 min ago',
      imageUrl: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80',
    },
    {
      id: 5,
      message: 'I am doing well, thank you!',
      timestamp: '1 min ago',
      imageUrl: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80',
    },
    {
      id: 6,
      message: 'I am doing well, thank you!',
      timestamp: 'just now',
      imageUrl: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80',
    },

  ];

  return (
    <div className="bg-yellow-100 p-10 h-[calc(100vh-120px)] overflow-auto">
      {messages.map((message) => (
        <Message
          key={message.id} // Provide a unique key
          message={message.message}
          timestamp={message.timestamp}
          imageUrl={message.imageUrl}
        />
      ))}
    </div>
  );
};

export default Messages;
