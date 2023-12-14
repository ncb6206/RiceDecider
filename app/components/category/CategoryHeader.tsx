'use client';

import { useRouter } from 'next/navigation';
import { AiOutlineHeart } from 'react-icons/ai';
import { useEffect } from 'react';
import { BiSolidHome } from 'react-icons/bi';

import Header from '@/app/components/Header';
import useLoginModal from '@/app/hooks/useLoginModal';
import useTokenStore from '@/app/hooks/useToken';

const CategoryHeader = () => {
  const useLogin = useLoginModal();
  const { hasToken, isLogin } = useTokenStore();
  const router = useRouter();

  useEffect(() => {
    hasToken();
  }, [hasToken]);

  const onClickHome = () => {
    router.push('/');
  };

  const useGoScrap = () => {
    if (isLogin) {
      router.push('/scrap');
      router.refresh();
      return;
    }
    useLogin.onOpen();
  };

  return (
    <Header
      leftIcon={BiSolidHome}
      leftOnClick={onClickHome}
      rightIcon={AiOutlineHeart}
      rightOnClick={useGoScrap}
      className="py-5"
    />
  );
};

export default CategoryHeader;
