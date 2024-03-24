'use client';

import { AiOutlineClose } from 'react-icons/ai';
import { useRouter } from 'next/navigation';

import Header from '@/app/components/Header';

const ScrapHeader = () => {
  const router = useRouter();

  const goCategory = () => {
    router.push('/category');
  };

  return (
    <Header
      className="w-full bg-rose-500 p-4 text-white"
      label="찜한 식당"
      rightIcon={AiOutlineClose}
      rightOnClick={goCategory}
    />
  );
};

export default ScrapHeader;
