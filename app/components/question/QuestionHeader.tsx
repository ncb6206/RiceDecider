'use client';

import { useRouter } from 'next/navigation';
import { AiOutlineLeft } from 'react-icons/ai';

import Header from '@/app/components/Header';

const QuestionHeader = () => {
  const router = useRouter();

  const back = () => {
    router.back();
  };

  const skip = () => {};

  return (
    <Header
      className="my-5"
      leftIcon={AiOutlineLeft}
      leftOnClick={back}
      progress={true}
      rightText="건너뛰기"
      rightOnClick={skip}
    />
  );
};

export default QuestionHeader;
