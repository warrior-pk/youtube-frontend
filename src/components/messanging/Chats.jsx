import React, { useEffect, useState } from 'react';
import { doc, onSnapshot } from 'firebase/firestore';
import { currentuser } from '@/db/dummy_data';
import Link from 'next/link';
import { db } from '@/db/firebase';

const Chats = () => {
  const [chats, setChats] = useState([]);
  useEffect(() => {
    const getChats = () => {
      console.log('indside chts', db);
      const unsub = onSnapshot(doc(db, 'userChats', currentuser.uid), (doc) => {
        setChats(doc.data());
      });
      return () => {
        unsub();
      };
    };
    currentuser.uid && getChats();
  }, [currentuser.uid]);
  console.log(Object.entries(chats));
  return (
    <div className='userChats'>
      {Object.entries(chats)?.map((item) => (
        <Link href={`/inbox/${item[0]}`} key={item[0]}>
          <div
            key={item[0]}
            className='flex cursor-pointer items-center gap-3 p-3 text-white hover:bg-yellow-700'
          >
            <img
              className='h-10 w-10 rounded-full object-cover'
              src={item[1].userInfo.photoURL}
              alt=''
            />
            <div className='userChatInfo'>
              <span className='text-lg font-medium'>
                {item[1].userInfo.displayName}
              </span>
              <p className='text-lightgray text-sm'>
                {item[1].userInfo.lastMessage?.text}
              </p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Chats;
