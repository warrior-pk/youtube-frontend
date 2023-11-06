'use client';

import { Toaster } from 'react-hot-toast';

const ToasterContext = () => {
  return (
    <div>
      <Toaster
        position='top-right'
        reverseOrder={false}
        gutter={8}
        containerClassName=''
        containerStyle={{}}
        toastOptions={{
          // Define default options
          className: '',
          duration: 5000,
          style: {
            background: '#f0f0f0',
            color: '#010101',
          },

          // Default options for specific types
          success: {
            duration: 3000,
            theme: {
              primary: 'green',
              secondary: 'black',
            },
          },
        }}
      />
    </div>
  );
};

export default ToasterContext;
