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
          className="relative flex w-full justify-center gap-3 rounded-lg bg-green-500 py-4 text-lg font-extrabold text-white transition hover:opacity-80 disabled:cursor-not-allowed disabled:opacity-70"
          onClick={logOut}
        >
          <p></p>
          {'로그아웃'}
        </button>
      )}
      {!session && (
        <button
          className="relative flex w-full justify-center gap-3 rounded-lg bg-green-500 py-4 text-lg font-extrabold text-white transition hover:opacity-80 disabled:cursor-not-allowed disabled:opacity-70"
          onClick={naverLogin}
        >
          <SiNaver size={24} className=" " />
          <p></p>
          {'네이버로 시작하기'}
        </button>
      )}
      {session && <pre>{JSON.stringify(session, null, 4)}</pre>}
    </>
  );
};

export default NaverLoginButton;
