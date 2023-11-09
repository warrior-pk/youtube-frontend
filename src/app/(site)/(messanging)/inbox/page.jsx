'use client';
import React, { useState, useEffect } from 'react';
import Sidebar from '@/components/messanging/Sidebar';
import Chat from '@/components/messanging/Chat';

const Page = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  const [isMessageBoxOpen, setIsMessageBoxOpen] = useState(false);

  const updateScreenSize = () => {
    setIsSmallScreen(window.innerWidth < 640); // Adjust the breakpoint as needed
  };

  useEffect(() => {
    updateScreenSize();
    window.addEventListener('resize', updateScreenSize);

    return () => {
      window.removeEventListener('resize', updateScreenSize);
    };
  }, []);

  const toggleMessageBox = () => {
    setIsMessageBoxOpen(!isMessageBoxOpen);
  };

  return (
    <div className='flex h-screen items-center justify-center bg-black'>
      <div className='flex h-4/5 w-4/5 overflow-hidden rounded-lg border border-solid border-black'>
        <Sidebar
          isSmallScreen={isSmallScreen}
          toggleMessageBox={toggleMessageBox}
        />
        {isSmallScreen ? isMessageBoxOpen && <Chat /> : <Chat />}
      </div>
    </div>
  );
};

export default Page;
