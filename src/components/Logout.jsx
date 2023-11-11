import React from 'react';
import toast from 'react-hot-toast';
import { useAuth } from '@/context/authContext';
import { useRouter } from 'next/navigation';
const Logout = () => {
  const router = useRouter();
  const { logout } = useAuth();
  const handleSubmit = (e) => {
    logout().then((res) => {
      toast('Logged out Successfully', {
        icon: '🚪',
      });
      router.push('/login');
    });
  };
  return (
    <div
      onClick={handleSubmit}
      className='nav-item mb-[calc(0.1*100svh)] mt-auto'
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
