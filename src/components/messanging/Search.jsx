import React, { useState } from 'react';
import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  serverTimestamp,
  setDoc,
  updateDoc,
  where,
} from 'firebase/firestore';
import { currentuser } from '@/db/dummy_data';
import { db } from '@/db/firebase';
const Search = () => {
  const [username, setUsername] = useState('');
  const [user, setUser] = useState(null);
  const [Err, setError] = useState(false);
  const currentUserUid = currentuser.uid;
  const handleSearch = async () => {
    const q = query(
      collection(db, 'users'),
      where('displayName', '==', username)
    );
    try {
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        setUser(doc.data());
      });
    } catch (error) {
      console.error(error);
      setError(true);
    }
  };
  const handleKey = (e) => {
    e.code === 'Enter' && handleSearch();
  };
  const handleSelect = async () => {
    //check whether chat between two exists or not , if not  create
    //will change in future as everyones name should be displayed with whom user can chat
    const combinedId =
      currentUserUid > user.uid
        ? currentUserUid + user.uid
        : user.uid + currentUserUid;
    try {
      const res = await getDoc(doc(db, 'chats', combinedId));
      console.log(res);
      if (!res.exists()) {
        await setDoc(doc(db, 'chats', combinedId), { messages: [] });
        console.log('one done');

        await updateDoc(doc(db, 'userChats', currentUserUid), {
          [combinedId + '.userInfo']: {
            uid: user.uid,
            displayName: user.displayName,
            photoURL: user.photoURL,
          },
          [combinedId + '.date']: serverTimestamp(),
        });
        console.log('two done');
        await updateDoc(doc(db, 'userChats', user.uid), {
          [combinedId + '.userInfo']: {
            uid: currentUserUid,
            displayName: currentuser.displayName,
            photoURL: currentuser.photoURL,
          },
          [combinedId + '.date']: serverTimestamp(),
        });
        console.log('all done');
      }
    } catch (error) {
      console.log(error);
    }
    setUsername('');
    setUser(null);
  };
  return (
    <div className='border-b border-gray-200'>
      <div className='pb-3 pt-3'>
        <input
          onKeyDown={handleKey}
          onChange={(e) => setUsername(e.target.value)}
          type='text'
          placeholder='Find a user'
          className='text-black-700 border-none bg-yellow-400 pl-1 placeholder-gray-500 outline-none'
          value={username}
        />
      </div>
      {Err && <span>No user with this name</span>}
      {user && (
        <div
          className='flex cursor-pointer items-center gap-3 p-3 text-white hover:bg-yellow-700'
          onClick={handleSelect}
        >
          <img
            className='h-10 w-10 rounded-full object-cover'
            src={user.photoURL}
            alt=''
          />
          <div className='userChatInfo'>
            <span className='text-lg font-medium'>{user.displayName}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Search;
