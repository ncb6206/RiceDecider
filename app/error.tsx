'use client';

import { useRouter } from 'next/navigation';

import Logo from '@/public/logo.svg';

const ErrorPage = () => {
  const router = useRouter();

  const goHome = () => {
    router.push('/');
  };

  return (
    <div className="flex h-full flex-col items-center justify-center gap-2">
      <Logo
        fill="#E14E4B"
        width="100"
        height="100"
        onClick={goHome}
        className="hover:cursor-pointer"
      />
      <p className="text-xl font-bold">에러가 발생하였습니다!</p>
    </div>
  );
};

export default ErrorPage;
