'use client';

import { signIn, signOut, useSession } from 'next-auth/react';
import { SiNaver } from 'react-icons/si';
// import { useRouter } from 'next/navigation';

const NaverLoginButton = () => {
  // const router = useRouter();
  const { data: session } = useSession();

  const naverLogin = () => {
    // router.push(`${process.env.BASE_URL}/oauth2/authorization/naver`);
    signIn('naver', { redirect: true, callbackUrl: '/' });
  };

  const logOut = () => {
    signOut();
  };

  return (
    <>
      {session && (
        <button
          className="relative flex h-14 w-full select-none items-center justify-center gap-3 rounded-lg bg-green-500 text-lg font-extrabold text-white transition hover:bg-green-600 disabled:cursor-not-allowed disabled:opacity-70"
          onClick={logOut}
        >
          {'로그아웃'}
        </button>
      )}
      {!session && (
        <button
          className="relative flex h-14 w-full select-none items-center justify-center gap-3 rounded-lg bg-green-500 text-lg font-extrabold text-white transition hover:bg-green-600 disabled:cursor-not-allowed disabled:opacity-70"
          onClick={naverLogin}
        >
          <SiNaver size={24} />
          {'네이버로 계속하기'}
        </button>
      )}
    </>
  );
};

export default NaverLoginButton;
