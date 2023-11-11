'use client';
import { createContext, useContext, useEffect, useState } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
const PathContext = createContext();
export function usePath() {
  return useContext(PathContext);
}

export const PathProvider = ({ children }) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  useEffect(() => {
    // console.log(pathname);
    // console.log(searchParams);
  }, [pathname, searchParams]);

  return (
    <PathContext.Provider value={{ pathname }}>{children}</PathContext.Provider>
  );
};
