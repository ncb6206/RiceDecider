'use client';

import { useEffect } from 'react';

import QuestionFooter from '@/app/(routes)/question/[questionId]/_component/QuestionFooter';
import QuestionHeader from '@/app/(routes)/question/[questionId]/_component/QuestionHeader';
import QuestionList from '@/app/(routes)/question/[questionId]/_component/QuestionList';
import QuestionTitle from '@/app/(routes)/question/[questionId]/_component/QuestionTitle';
import useQuestionStore, { QuestionDataProps } from '@/app/store/question';

interface QuestionClientProps {
  questions: QuestionDataProps[];
  questionId: string;
}

const QuestionClient = ({ questions, questionId }: QuestionClientProps) => {
  const questionStore = useQuestionStore();

  // console.log(questions, decodeURI(questionId));
  useEffect(() => {
    questionStore.setQuestionData(questions);
    questionStore.setCategoryName(decodeURI(questionId));

    if (questionStore.questionNumber !== 0) {
      questionStore.onResetNumber();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [questions]);

  return (
    <main className="mx-4 flex h-full flex-col items-center overflow-y-auto overflow-x-hidden">
      <QuestionHeader />
      <QuestionTitle />
      <QuestionList />
      <div className="flex-1" />
      <QuestionFooter />
    </main>
  );
};

export default QuestionClient;
