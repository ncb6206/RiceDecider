'use client';

import { BiSolidHome } from 'react-icons/bi';
import { BsChevronLeft } from 'react-icons/bs';
import { PiListBold } from 'react-icons/pi';

import Header from '@/app/components/Header';
import { useRouter } from 'next/navigation';
import useSwipeStore from '@/app/hooks/useSwipeStore';

const RecommendHeader = () => {
  const router = useRouter();
  const useSwipe = useSwipeStore();

  const onClickHome = () => {
    router.push('/');
  };

  const onClickSwipe = () => {
    useSwipe.onSwipe();
  };

  return (
    <>
      {useSwipe.isSwipe && (
        <Header
          leftIcon={BiSolidHome}
          leftOnClick={onClickHome}
          rightIcon={PiListBold}
          rightOnClick={onClickSwipe}
          className="bg-rose-500 p-5 text-white"
        />
      )}
      {!useSwipe.isSwipe && (
        <Header
          leftIcon={BsChevronLeft}
          leftOnClick={onClickSwipe}
          label="밥정너 추천 식당"
          className="bg-rose-500 p-5 text-white"
        />
      )}
    </>
  );
};

export default RecommendHeader;
