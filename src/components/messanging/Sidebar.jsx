import React from 'react';
import Navbar from './Navbar';
import Search from './Search';
import Chats from './Chats';

const Sidebar = () => {
  return (
    <div className='relative h-full flex-1 bg-yellow-50'>
      <Navbar />
      <Search />
      <Chats />
    </div>
  );
};

export default Sidebar;
