'use client';

import { SiNaver } from 'react-icons/si';

import { useNaverLogin } from '@/app/utils/naverLogin';
import toast from 'react-hot-toast';
import useTokenStore from '@/app/hooks/useToken';
import { useRouter } from 'next/navigation';

const NaverLoginButton = () => {
  const router = useRouter();
  const naverLogin = useNaverLogin();
  const { logOut, isLogin } = useTokenStore();

  const onStart = () => {
    router.push('/category');
  };

  const onLogOut = () => {
    logOut();
    toast('로그아웃 되었습니다!');
  };

  return (
    <>
      {isLogin && (
        <div className="flex flex-col gap-y-4">
          <button
            className="relative flex h-14 w-full select-none items-center justify-center rounded-lg bg-white text-lg font-extrabold text-red-500 transition hover:opacity-80 disabled:cursor-not-allowed disabled:opacity-70"
            onClick={onStart}
          >
            <p>밥정너 시작하기</p>
          </button>
          <button
            className="relative flex h-14 w-full select-none items-center justify-center gap-3 rounded-lg bg-green-500 text-lg font-extrabold text-white transition hover:bg-green-600 disabled:cursor-not-allowed disabled:opacity-70"
            onClick={onLogOut}
          >
            <p>네이버 로그아웃</p>
          </button>
        </div>
      )}
      {!isLogin && (
        <button
          className="relative flex h-14 w-full select-none items-center justify-center gap-3 rounded-lg bg-green-500 text-lg font-extrabold text-white transition hover:bg-green-600 disabled:cursor-not-allowed disabled:opacity-70"
          onClick={naverLogin}
        >
          <SiNaver size={24} />
          <p>네이버로 계속하기</p>
        </button>
      )}
    </>
  );
};

export default NaverLoginButton;
