import React from 'react';
import Logout from './Logout';

const Navbar = ({ children }) => {
  return (
    <>
      <div className='flex bg-[#f0f0f0] first-letter:font-[Inter]'>
        <div className='sidebar flex h-screen w-max flex-col bg-[#ffc629] p-5 text-[#333333] shadow-lg'>
          <div className='logo flex justify-center font-bold'>
            S<span className='hidden lg:block'>phere</span>
          </div>
          <div className='nav flex h-1/2 flex-col justify-center gap-3'>
            <div className='items chosen flex gap-2 px-5 py-2 align-bottom text-lg'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width={24}
                height={24}
                viewBox='0 0 24 24'
                style={{
                  fill: 'rgba(51, 51, 51, 1)',
                  transform: '',
                  msfilter: '',
                }}
              >
                <path d='M12.74 2.32a1 1 0 0 0-1.48 0l-9 10A1 1 0 0 0 3 14h2v7a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-7h2a1 1 0 0 0 1-1 1 1 0 0 0-.26-.68z' />
              </svg>
              <span className='hidden lg:block'>Home</span>
            </div>
            <div className='items flex gap-2 px-5 py-2 text-lg'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width={24}
                height={24}
                viewBox='0 0 24 24'
                style={{
                  fill: 'rgba(51, 51, 51, 1)',
                  transform: '',
                  msfilter: '',
                }}
              >
                <path d='M16 2H8C4.691 2 2 4.691 2 8v12a1 1 0 0 0 1 1h13c3.309 0 6-2.691 6-6V8c0-3.309-2.691-6-6-6zm4 13c0 2.206-1.794 4-4 4H4V8c0-2.206 1.794-4 4-4h8c2.206 0 4 1.794 4 4v7z' />
                <circle cx='9.5' cy='11.5' r='1.5' />
                <circle cx='14.5' cy='11.5' r='1.5' />
              </svg>
              <span className='hidden lg:block'>Chat</span>
            </div>
            <div className='items flex gap-2 px-5 py-2 text-lg'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width={24}
                height={24}
                viewBox='0 0 24 24'
                style={{
                  fill: 'rgba(51, 51, 51, 1)',
                  transform: '',
                  msfilter: '',
                }}
              >
                <path d='M12 4.595a5.904 5.904 0 0 0-3.996-1.558 5.942 5.942 0 0 0-4.213 1.758c-2.353 2.363-2.352 6.059.002 8.412l7.332 7.332c.17.299.498.492.875.492a.99.99 0 0 0 .792-.409l7.415-7.415c2.354-2.354 2.354-6.049-.002-8.416a5.938 5.938 0 0 0-4.209-1.754A5.906 5.906 0 0 0 12 4.595zm6.791 1.61c1.563 1.571 1.564 4.025.002 5.588L12 18.586l-6.793-6.793c-1.562-1.563-1.561-4.017-.002-5.584.76-.756 1.754-1.172 2.799-1.172s2.035.416 2.789 1.17l.5.5a.999.999 0 0 0 1.414 0l.5-.5c1.512-1.509 4.074-1.505 5.584-.002z' />
              </svg>
              <span className='hidden lg:block'>Match</span>
            </div>
            <div className='items flex gap-2 px-5 py-2 text-lg'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width={24}
                height={24}
                viewBox='0 0 24 24'
                style={{
                  fill: 'rgba(51, 51, 51, 1)',
                  transform: '',
                  msfilter: '',
                }}
              >
                <path d='M12 2a5 5 0 1 0 5 5 5 5 0 0 0-5-5zm0 8a3 3 0 1 1 3-3 3 3 0 0 1-3 3zm9 11v-1a7 7 0 0 0-7-7h-4a7 7 0 0 0-7 7v1h2v-1a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5v1z' />
              </svg>
              <span className='hidden lg:block'>Profile</span>
            </div>
            <div className='items flex gap-2 px-5 py-2 text-lg'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width={24}
                height={24}
                viewBox='0 0 24 24'
                style={{
                  fill: 'rgba(51, 51, 51, 1)',
                  transform: '',
                  msfilter: '',
                }}
              >
                <path d='M19 13.586V10c0-3.217-2.185-5.927-5.145-6.742C13.562 2.52 12.846 2 12 2s-1.562.52-1.855 1.258C7.185 4.074 5 6.783 5 10v3.586l-1.707 1.707A.996.996 0 0 0 3 16v2a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-2a.996.996 0 0 0-.293-.707L19 13.586zM19 17H5v-.586l1.707-1.707A.996.996 0 0 0 7 14v-4c0-2.757 2.243-5 5-5s5 2.243 5 5v4c0 .266.105.52.293.707L19 16.414V17zm-7 5a2.98 2.98 0 0 0 2.818-2H9.182A2.98 2.98 0 0 0 12 22z' />
              </svg>
              <span className='hidden lg:block'>Notification</span>
            </div>
            <Logout />
          </div>
        </div>
        <div className='container flex justify-center '>
          <div className='flex h-full min-w-[min(100%-4rem,40rem)] flex-col  px-5 pt-5'>
            {children}
            <div className='create-post flex max-h-20 gap-3 rounded-lg bg-slate-100 p-4 shadow-md'>
              <div className='relative h-11 grow'>
                <input
                  placeholder="What's your mood today?"
                  className='border-blue-gray-200 text-blue-gray-700 placeholder-shown:border-blue-gray-200 disabled:bg-blue-gray-50 peer h-full w-full border-b bg-transparent pb-1.5 pt-4 font-sans text-sm font-normal outline outline-0 transition-all focus:border-[#ffc629] focus:outline-0 disabled:border-0'
                />
              </div>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width={24}
                height={24}
                viewBox='0 0 24 24'
                style={{
                  fill: 'rgba(255, 198, 41, 1)',
                  transform: '',
                  msfilter: '',
                }}
              >
                <path d='m21.426 11.095-17-8A1 1 0 0 0 3.03 4.242l1.212 4.849L12 12l-7.758 2.909-1.212 4.849a.998.998 0 0 0 1.396 1.147l17-8a1 1 0 0 0 0-1.81z' />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
