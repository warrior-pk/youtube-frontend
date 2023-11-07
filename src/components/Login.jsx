'use client';
import React from 'react';
import { useState } from 'react';
import { auth } from '@/db/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';

const Login = () => {
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const email = e.target[0].value;
    const password = e.target[1].value;
    const emailRegex = /\S+@\S+\.\S+/;
    if (emailRegex.test(email) === false) {
      toast.error('Invalid Email');
      setLoading(false);
      return;
    }
    if (password.length < 6) {
      toast.error('Invalid password');
      setLoading(false);
      return;
    }
    try {
      await signInWithEmailAndPassword(auth, email, password);
      toast.success('Logged in successfully');
      router.push('/home');
    } catch (err) {
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='mx-auto flex w-full max-w-md items-center px-6 lg:w-2/6 '>
      <div className='flex-1 rounded-xl bg-white px-5 py-10 shadow-lg'>
        <div className='text-center'>
          <div className='mx-auto flex justify-center'>
            <img
              className='h-7 w-auto sm:h-8'
              src='/assets/logo-primary.png'
              alt=''
            />
          </div>
          <p className='mt-3 text-text-dark'>Sign in to access your account</p>
        </div>
        <div className='mt-8'>
          <form method='POST' onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor='email'
                className='mb-2 block text-sm text-text-dark '
              >
                Email Address
              </label>
              <input
                type='email'
                name='email'
                id='email'
                placeholder='example@example.com'
                className='mt-2 block  w-full rounded-lg border border-gray-200 bg-white px-4 py-2 text-gray-700 placeholder-gray-400 focus:border-accent-primary-dark focus:outline-none focus:ring focus:ring-accent-primary-dark focus:ring-opacity-40 '
              />
            </div>
            <div className='mt-6'>
              <div className='mb-2 flex justify-between'>
                <label htmlFor='password' className='text-sm text-text-dark '>
                  Password
                </label>
                <a
                  href='#'
                  className='text-sm text-gray-400 hover:text-accent-primary-dark hover:underline focus:text-primary-col'
                >
                  Forgot password?
                </a>
              </div>
              <input
                type='password'
                name='password'
                id='password'
                placeholder='Your Password'
                className='mt-2 block w-full rounded-lg border border-gray-200 bg-white px-4 py-2 text-gray-700 placeholder-gray-400 focus:border-accent-primary-dark focus:outline-none focus:ring focus:ring-accent-primary-dark focus:ring-opacity-40 '
              />
            </div>
            <div className='mt-6'>
              <button
                type='submit'
                className={`${
                  loading ? 'cursor-not-allowed' : ''
                } text-dark w-full transform rounded-lg bg-primary-col px-4 py-2 tracking-wide transition-colors duration-300 hover:bg-accent-primary-dark focus:bg-accent-primary-dark focus:outline-none focus:ring focus:ring-accent-primary-dark focus:ring-opacity-50`}
              >
                <div className='flex select-none justify-center gap-1  align-middle'>
                  {loading && (
                    <svg
                      class='mr-3 h-5 w-5 animate-spin text-white'
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                    >
                      <circle
                        class='opacity-25'
                        cx='12'
                        cy='12'
                        r='10'
                        stroke='currentColor'
                        stroke-width='4'
                      ></circle>
                      <path
                        class='opacity-75'
                        fill='currentColor'
                        d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
                      ></path>
                    </svg>
                  )}
                  {loading ? 'Logging in...' : 'Log in'}
                </div>
              </button>
            </div>
          </form>
          <p className='mt-6 text-center text-sm text-gray-400'>
            Don't have an account yet?{' '}
            <a
              href='/signup'
              className='text-accent-primary-dark hover:underline focus:underline focus:outline-none'
            >
              Sign up
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
