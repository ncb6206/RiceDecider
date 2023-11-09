'use client';

import { AiOutlineHeart, AiFillHeart, AiOutlineLeft } from 'react-icons/ai';
import { useRouter } from 'next/navigation';

import Header from '@/app/components/Header';

const InformationHeader = () => {
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
      label="식당 이름"
      rightIcon={AiOutlineHeart}
      rightOnClick={heart}
    />
  );
};

export default InformationHeader;
