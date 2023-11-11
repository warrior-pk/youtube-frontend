import Chat from '@/components/messanging/Chat';
import React from 'react';

const Page = ({ params }) => {
  return (
    <>
      <Chat id={params.id} />
    </>
  );
};

export default Page;
