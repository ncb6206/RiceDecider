'use client';

import { useEffect } from 'react';

import QuestionFooter from '@/app/components/question/QuestionFooter';
import QuestionHeader from '@/app/components/question/QuestionHeader';
import QuestionList from '@/app/components/question/QuestionList';
import QuestionTitle from '@/app/components/question/QuestionTitle';
import useQuestionStore, {
  QuestionDataProps,
} from '@/app/hooks/useQuestionStore';

interface QuestionClientProps {
  questions: QuestionDataProps[];
  questionId: string;
}

const QuestionClient = ({ questions, questionId }: QuestionClientProps) => {
  const { setQuestionData, setCategoryName, questionNumber, onResetNumber } =
    useQuestionStore();

  // console.log(questions, decodeURI(questionId));
  useEffect(() => {
    setQuestionData(questions);
    setCategoryName(decodeURI(questionId));

    if (questionNumber !== 0) {
      onResetNumber();
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
