'use client';

import { useRouter } from 'next/navigation';

import NaverLoginButton from '@/app/components/button/NaverLoginButton';
import TextButton from '@/app/components/button/TextButton';
import useTokenStore from '@/app/store/token';
import { useEffect } from 'react';

export interface hasTokenPros {
  hasToken: boolean;
}

const HomeFooter = ({ hasToken }: hasTokenPros) => {
  const router = useRouter();
  const { setIslogin, isLogin } = useTokenStore();

  useEffect(() => {
    setIslogin(hasToken);
  }, [hasToken, setIslogin]);

  const goCategory = () => {
    router.push('/category');
  };

  return (
    <div className="mb-16 flex flex-col gap-y-4 px-6">
      <NaverLoginButton />
      {!isLogin && (
        <TextButton
          label="그냥 둘러보기"
          onClick={goCategory}
          className="mx-auto mt-2 text-xl font-medium text-white"
        />
      )}
    </div>
  );
};

export default HomeFooter;
