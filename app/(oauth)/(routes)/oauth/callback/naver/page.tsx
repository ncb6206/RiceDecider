'use client';

import Loader from '@/app/components/Loader';
import getToken from '@/app/services/token';
import { useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

const NaverPage = () => {
  const searchParams = useSearchParams();
  const code = searchParams.get('code');
  const state = searchParams.get('state');

  useEffect(() => {
    const fetchToken = async () => {
      if (code && state) {
        const response = await getToken({ code, state });
        console.log('페이지', response);
      }
    };

    fetchToken();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <Loader />
    </div>
  );
};

export default NaverPage;
