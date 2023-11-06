import React from 'react';

const Login = () => {
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
          <form method='POST'>
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
              <button className='text-dark w-full transform rounded-lg bg-primary-col px-4 py-2 tracking-wide transition-colors duration-300 hover:bg-accent-primary-dark focus:bg-accent-primary-dark focus:outline-none focus:ring focus:ring-accent-primary-dark focus:ring-opacity-50'>
                Sign in
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
