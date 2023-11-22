'use client';

import Title from '@/app/components/Title';
import useQuestionStore from '@/app/hooks/useQuestionStore';

const QuestionTitle = () => {
  const useQuestion = useQuestionStore(state => state);
  const { questionData, questionNumber } = useQuestion;

  return (
    <div className="my-5 w-full">
      {questionData[questionNumber]?.questionContent && (
        <Title title={questionData[questionNumber].questionContent} />
      )}
    </div>
  );
};

export default QuestionTitle;
