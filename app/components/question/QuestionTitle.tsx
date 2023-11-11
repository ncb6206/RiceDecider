'use client';

import Title from '@/app/components/Title';
import useQuestionStore from '@/app/hooks/useQuestionStore';

const QuestionTitle = () => {
  const useQuestion = useQuestionStore(state => state);

  return (
    <div className="my-5 w-full">
      <Title
        title={useQuestion.questionData[useQuestion.questionNumber].question}
      />
    </div>
  );
};

export default QuestionTitle;
