'use client';

import QuestionFooter from '@/app/components/question/QuestionFooter';
import QuestionHeader from '@/app/components/question/QuestionHeader';
import QuestionList from '@/app/components/question/QuestionList';
import QuestionTitle from '@/app/components/question/QuestionTitle';
import useQuestionStore, {
  QuestionDataProps,
} from '@/app/hooks/useQuestionStore';
import { useEffect } from 'react';

interface QuestionClientProps {
  questions: QuestionDataProps[];
  questionId: string;
}

const QuestionClient = ({ questions, questionId }: QuestionClientProps) => {
  const useQuestion = useQuestionStore();

  console.log(questions, decodeURI(questionId));
  useEffect(() => {
    useQuestionStore.setState({
      questionData: questions,
      categoryName: decodeURI(questionId),
    });

    if (useQuestion.questionNumber !== 0) {
      useQuestion.onResetNumber();
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
