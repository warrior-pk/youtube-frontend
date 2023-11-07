'use client';
import React, { useContext, useState, useEffect } from 'react';
import { AuthContext } from '@/context/authContext';
import { redirect } from 'next/navigation';
import Loading from '@/components/loading';

const Layout = ({ children }) => {
  // const { loadingCurrentUser, currentUser } = useContext(AuthContext);
  // const [shouldRender, setShouldRender] = useState(false);

  // useEffect(() => {
  //   const waitUntilFalse = async () => {
  //     while (loadingCurrentUser) {
  //       await new Promise((resolve) => setTimeout(resolve, 100)); // Adjust the delay as needed
  //     }
  //     setShouldRender(true);
  //   };
  //   waitUntilFalse();
  // }, [loadingCurrentUser]);

  // useEffect(() => {
  //   if (shouldRender && !currentUser) {
  //     redirect('/login');
  //   }
  // }, [shouldRender, currentUser]);

  return (
    <>
      {/* {!shouldRender && <Loading />} */}
      {/* {shouldRender && ( */}
      <>
        <div className='bg-blue-500'>Layout </div>
        {children}
      </>
      {/* )} */}
    </>
  );
};

export default Layout;
