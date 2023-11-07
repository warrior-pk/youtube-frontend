'use client';

// this is just a dummy page , '/' gets redirected to '/home'
import toast from 'react-hot-toast';

const notify = () => toast.success('Here is your toast.');

const Page = () => {
  return (
    <main>
      <button onClick={notify}>Make me a toast</button>
    </main>
  );
};
export default Page;
