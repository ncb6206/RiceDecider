'use client';

import { BiSolidHome } from 'react-icons/bi';
import { BsChevronLeft } from 'react-icons/bs';
import { PiListBold } from 'react-icons/pi';
import { VscBlank } from 'react-icons/vsc';

import Header from '@/app/components/Header';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const RecommendHeader = () => {
  const router = useRouter();
  const [isSwipe, setIsSwipe] = useState(true);

  const onClickHome = () => {
    router.push('/');
  };

  const onClickSwipe = () => {
    setIsSwipe(prev => !prev);
  };

  return (
    <>
      {isSwipe && (
        <Header
          leftIcon={BiSolidHome}
          leftOnClick={onClickHome}
          rightIcon={PiListBold}
          rightOnClick={onClickSwipe}
          className="bg-rose-500 p-5 text-white"
        />
      )}
      {!isSwipe && (
        <Header
          leftIcon={BsChevronLeft}
          leftOnClick={onClickSwipe}
          label="밥정너 추천 식당"
          rightIcon={VscBlank}
          className="bg-rose-500 p-5 text-white"
        />
      )}
    </>
  );
};

export default RecommendHeader;
