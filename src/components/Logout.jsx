import React from 'react';
import toast from 'react-hot-toast';
const { signOut } = require('firebase/auth');
const { auth } = require('@/db/firebase');
const Logout = () => {
  const handleSubmit = (e) => {
    console.log('handle signout');
    signOut(auth);
    toast('Logged out Successfully', {
      icon: '🚪',
    });
  };
  return (
    <div
      onClick={handleSubmit}
      className='items mb-52 mt-auto flex justify-center px-2 py-2 text-lg md:px-5 lg:justify-start lg:gap-2'
    >
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width={24}
        height={24}
        viewBox='0 0 24 24'
        style={{ fill: 'rgba(51, 51, 51, 1)', transform: '', msfilter: '' }}
      >
        <path d='M16 13v-2H7V8l-5 4 5 4v-3z' />
        <path d='M20 3h-9c-1.103 0-2 .897-2 2v4h2V5h9v14h-9v-4H9v4c0 1.103.897 2 2 2h9c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2z' />
      </svg>
      <span className='hidden lg:block'>Logout</span>
    </div>
  );
};

export default Logout;
