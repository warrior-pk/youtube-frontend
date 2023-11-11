'use client';
import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import { usePath } from '@/context/pathContext';
import { useAuth } from '@/context/authContext';
const Layout = ({ children }) => {
  const { currentUser } = useAuth();
  const [user, setUser] = useState(currentUser);
  const { pathname } = usePath();
  const activePage = pathname.split('/')[1];

  useEffect(() => {
    setUser(currentUser);
  }, [currentUser]);

  return (
    <div className=''>
      {/* <div className='username absolute left-1/2 top-0'>
        {user ? user.displayName : 'No user'}
      </div> */}
      <Navbar children={children} activePage={activePage} user={user} />
    </div>
  );
};

export default Layout;
