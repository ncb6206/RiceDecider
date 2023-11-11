'use client';

import { AiOutlineClose } from 'react-icons/ai';
import { VscBlank } from 'react-icons/vsc';

import Header from '@/app/components/Header';
import { useRouter } from 'next/navigation';

const FavoriteHeader = () => {
  const router = useRouter();
  const goCategory = () => {
    router.push('/category');
  };

  return (
    <Header
      className="w-full bg-rose-500 p-4 text-white"
      leftIcon={VscBlank}
      label="찜한 식당"
      rightIcon={AiOutlineClose}
      rightOnClick={goCategory}
    />
  );
};

export default FavoriteHeader;
