import React from 'react';
import Navbar from './Navbar';
import Search from './Search';
import Chats from './Chats';

const Sidebar = () => {
  return (
    <div className="flex-1 bg-yellow-300 relative">
      <Navbar />
      <Search />
      <Chats/>
    </div>
  );
};

export default Sidebar;
