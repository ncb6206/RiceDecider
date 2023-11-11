'use client';

import { useRouter } from 'next/navigation';
import { AiOutlineLeft } from 'react-icons/ai';

import Header from '@/app/components/Header';
import useQuestionStore from '@/app/hooks/useQuestionStore';

const QuestionHeader = () => {
  const router = useRouter();
  const useQuestion = useQuestionStore();

  const back = () => {
    router.back();
    useQuestionStore.setState({ questionNumber: 0, finished: false });
    useQuestion.onResetSelected();
  };

  const skip = () => {
    if (useQuestion.questionNumber < useQuestion.questionData.length - 1) {
      useQuestionStore.setState({
        questionNumber: useQuestion.questionNumber + 1,
      });

      useQuestion.onResetSelected();
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
