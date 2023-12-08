'use client';

import { useRouter } from 'next/navigation';
import { AiOutlineHeart } from 'react-icons/ai';

import Header from '@/app/components/Header';
import useLoginModal from '@/app/hooks/useLoginModal';
import { isToken } from '@/app/utils/isToken';

const CategoryHeader = () => {
  const useLogin = useLoginModal();
  const hasToken = isToken();
  const router = useRouter();

  const useGoScrap = () => {
    if (hasToken) return router.push('/scrap');
    useLogin.onOpen();
  };

  return (
    <Header
      rightIcon={AiOutlineHeart}
      rightOnClick={useGoScrap}
      className="py-5"
    />
  );
};

export default CategoryHeader;
