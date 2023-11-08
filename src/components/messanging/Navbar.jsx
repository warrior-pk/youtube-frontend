import React from 'react';

const Navbar = () => {
  return (
    <div className="flex items-center bg-yellow-500 h-20 p-2 justify-between text-black-300">
      <span className="font-bold text-3xl">DMs</span>
      <div className="flex space-x-10 items-center">
        <img
          className="h-12 w-12 rounded-full object-cover"
          src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80"
          alt="User"
        />
      </div>
    </div>
  );
};

export default Navbar;
