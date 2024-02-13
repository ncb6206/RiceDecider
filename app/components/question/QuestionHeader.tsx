'use client';

import { useRouter } from 'next/navigation';
import { AiOutlineLeft } from 'react-icons/ai';

import Header from '@/app/components/Header';
import useQuestionStore from '@/app/hooks/useQuestionStore';

const QuestionHeader = () => {
  const router = useRouter();
  const {
    questionNumber,
    questionData,
    setQuestionNumber,
    setFinished,
    onResetSelected,
  } = useQuestionStore();

  const back = () => {
    router.back();
    setQuestionNumber(0);
    setFinished(false);
    onResetSelected();
  };

  const skip = () => {
    if (questionNumber < questionData.length - 1) {
      setQuestionNumber(questionNumber + 1);
      onResetSelected();
    }
  };

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
