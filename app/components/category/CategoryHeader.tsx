'use client';

import { useRouter } from 'next/navigation';
import { AiOutlineHeart } from 'react-icons/ai';

import Header from '@/app/components/Header';

const CategoryHeader = () => {
  const router = useRouter();

  const goFavorite = () => {
    router.push('/favorite');
  };

  return (
    <Header
      rightIcon={AiOutlineHeart}
      rightOnClick={goFavorite}
      className="py-5"
    />
  );
};

export default CategoryHeader;
