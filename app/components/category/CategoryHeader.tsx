'use client';

import { useRouter } from 'next/navigation';
import { AiOutlineHeart } from 'react-icons/ai';
import { useEffect } from 'react';
import { BiSolidHome } from 'react-icons/bi';

import Header from '@/app/components/Header';
import useTokenStore from '@/app/store/token';
import useLoginModalStore from '@/app/store/loginModal';

const CategoryHeader = () => {
  const { onOpen } = useLoginModalStore();
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
    onOpen();
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
