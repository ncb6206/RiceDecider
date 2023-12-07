'use client';

import { SiNaver } from 'react-icons/si';
import { useNaverLogin } from '@/app/utils/naverLogin';

const NaverLoginButton = () => {
  const naverLogin = useNaverLogin();
  const session = false;

  const logOut = () => {};

  return (
    <>
      {session && (
        <button
          className="relative flex h-14 w-full select-none items-center justify-center gap-3 rounded-lg bg-green-500 text-lg font-extrabold text-white transition hover:bg-green-600 disabled:cursor-not-allowed disabled:opacity-70"
          onClick={logOut}
        >
          로그아웃
        </button>
      )}
      {!session && (
        <>
          <button
            className="relative flex h-14 w-full select-none items-center justify-center gap-3 rounded-lg bg-green-500 text-lg font-extrabold text-white transition hover:bg-green-600 disabled:cursor-not-allowed disabled:opacity-70"
            onClick={naverLogin}
          >
            <SiNaver size={24} />
            네이버로 계속하기
          </button>
        </>
      )}
    </>
  );
};

export default NaverLoginButton;
