'use client';

import QuestionFooter from '@/app/components/question/QuestionFooter';
import QuestionHeader from '@/app/components/question/QuestionHeader';
import QuestionList from '@/app/components/question/QuestionList';
import QuestionTitle from '@/app/components/question/QuestionTitle';
import useQuestionStore, {
  QuestionDataProps,
} from '@/app/hooks/useQuestionStore';
import { useEffect } from 'react';

const QuestionClient = (questions: { questions: QuestionDataProps[] }) => {
  const useQuestion = useQuestionStore();

  console.log(questions.questions);
  useEffect(() => {
    useQuestionStore.setState({ questionData: questions.questions });

    if (useQuestion.questionNumber !== 0) {
      useQuestion.onResetNumber();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [questions.questions]);

  return (
    <main className="mx-4 flex h-full flex-col items-center overflow-auto">
      <QuestionHeader />
      <QuestionTitle />
      <QuestionList />
      <div className="flex-1" />
      <QuestionFooter />
    </main>
  );
};

export default QuestionClient;
