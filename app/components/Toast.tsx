'use client';

import { Toaster } from 'react-hot-toast';

const Toast = () => {
  return (
    <Toaster
      position="top-center"
      reverseOrder={false}
      toastOptions={{
        style: {
          backgroundColor: 'white',
          fontWeight: 500,
          padding: '12px 16px',
          color: 'black',
          fontSize: 15,
          height: 47,
        },
        duration: 3000,
      }}
    />
  );
};

export default Toast;
