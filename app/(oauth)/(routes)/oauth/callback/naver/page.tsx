'use client';

import { useSearchParams, useRouter } from 'next/navigation';
import { useEffect } from 'react';

import Loader from '@/app/components/Loader';
import getToken from '@/app/services/token';

const NaverPage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const code = searchParams.get('code');
  const state = searchParams.get('state');

  useEffect(() => {
    const fetchToken = async () => {
      if (code && state) {
        const response = await getToken({ code, state });
        // console.log('페이지', response);

        if (response.access_token && response.refresh_token) {
          return router.push('/category');
        }
      }

      return router.push('/');
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
