'use client';

import { useRouter } from 'next/navigation';
import { AiOutlineLeft } from 'react-icons/ai';

import Header from '@/app/components/Header';
import useQuestionStore from '@/app/store/question';

const QuestionHeader = () => {
  const router = useRouter();
  const questionStore = useQuestionStore();
  const { questionNumber, questionData } = questionStore;

  const back = () => {
    router.back();
    questionStore.setQuestionNumber(0);
    questionStore.setFinished(false);
    questionStore.onResetSelected();
  };

  const skip = () => {
    if (questionNumber < questionData.length - 1) {
      questionStore.setQuestionNumber(questionStore.questionNumber + 1);
      questionStore.onResetSelected();
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
