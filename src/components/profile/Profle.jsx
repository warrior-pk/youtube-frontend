import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import PostCard from './PostCard';

const Profile = ({ user }) => {
  const [userInfo, setUserInfo] = useState(user);
  useEffect(() => {
    setUserInfo(user);
    console.log(userInfo);
  }, [user]);
  return (
    <div className='flex h-full flex-col'>
      <div className='profile-header relative flex flex-col shadow-md'>
        <div className='absolute right-0 p-2'>
          <Link href={`/profile/edit`}>
            <svg
              className='pr'
              xmlns='http://www.w3.org/2000/svg'
              width={24}
              height={24}
              viewBox='0 0 24 24'
              style={{ fill: 'rgba(0, 0, 0, 1)', transform: '', msfilter: '' }}
            >
              <path d='M19.045 7.401c.378-.378.586-.88.586-1.414s-.208-1.036-.586-1.414l-1.586-1.586c-.378-.378-.88-.586-1.414-.586s-1.036.208-1.413.585L4 13.585V18h4.413L19.045 7.401zm-3-3 1.587 1.585-1.59 1.584-1.586-1.585 1.589-1.584zM6 16v-1.585l7.04-7.018 1.586 1.586L7.587 16H6zm-2 4h16v2H4z' />
            </svg>
          </Link>
        </div>
        <div className='flex flex-col items-center gap-5 py-2'>
          <div
            className={`h-32 w-32 rounded-full bg-[url(/assets/dp-skelton.webp)] bg-contain md:h-52 md:w-52`}
          >
            {userInfo.photoURL && <Image src={userInfo?.photoURL} />}
          </div>
          <div className='detail'>
            <span className='text-xl font-medium'>{userInfo.displayName}</span>
          </div>
          {/* <hr class='my-8 h-px w-full border-0 bg-gray-300 '></hr> */}
        </div>
      </div>
      <div class='scrollable grid grid-cols-1 gap-4 p-4 sm:grid-cols-2 md:grid-cols-3'>
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
      </div>
    </div>
  );
};

export default Profile;
