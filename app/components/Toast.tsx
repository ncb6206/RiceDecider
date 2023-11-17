'use client';

import { Toaster } from 'react-hot-toast';

const Toast = () => {
  return (
    <Toaster
      position="bottom-center"
      reverseOrder={false}
      toastOptions={{
        style: {
          backgroundColor: '#322F35',
          fontWeight: 500,
          padding: '12px 16px',
          color: 'white',
          fontSize: 15,
          height: 47,
        },
        duration: 3000,
      }}
    />
  );
};

export default Toast;
