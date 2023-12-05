'use client';

import Loader from '@/app/components/Loader';
import getToken from '@/app/services/token';
import { useSearchParams } from 'next/navigation';

const NaverPage = () => {
  const searchParams = useSearchParams();
  const code = searchParams.get('code');
  const state = searchParams.get('state');

  if (code && state) {
    const response = getToken({ code, state });
    console.log('페이지', response);
  }

  return (
    <div>
      <Loader />
    </div>
  );
};

export default NaverPage;
