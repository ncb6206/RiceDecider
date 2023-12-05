'use client';

import Loader from '@/app/components/Loader';
import getToken from '@/app/services/token';
import { useSearchParams } from 'next/navigation';

interface responseProps {
  access_token: string;
  refresh_token: string;
}

const NaverPage = () => {
  const searchParams = useSearchParams();
  const code = searchParams.get('code');
  const state = searchParams.get('state');
  console.log(code, state);

  if (code && state) {
    const response: responseProps = getToken({ code, state });
    console.log('페이지', response);
  }

  return (
    <div>
      <Loader />
    </div>
  );
};

export default NaverPage;
