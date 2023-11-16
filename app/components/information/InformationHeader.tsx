'use client';

import { AiOutlineHeart, AiOutlineLeft } from 'react-icons/ai';
import { useRouter } from 'next/navigation';

import Header from '@/app/components/Header';
import useRecommendStore from '@/app/hooks/useRecommend';

const InformationHeader = () => {
  const useRecommend = useRecommendStore(state => state);
  const router = useRouter();

  const back = () => {
    router.back();
  };

  const heart = () => {};

  return (
    <Header
      className="my-5 px-4"
      leftIcon={AiOutlineLeft}
      leftOnClick={back}
      label={useRecommend.recommend.title}
      rightIcon={AiOutlineHeart}
      rightOnClick={heart}
    />
  );
};

export default InformationHeader;
