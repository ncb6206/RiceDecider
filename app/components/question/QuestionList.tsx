'use client';

import QuestionButton from '@/app/components/question/QuestionButton';
import useQuestionStore from '@/app/hooks/useQuestionStore';

const QuestionList = () => {
  const { questionData, questionNumber } = useQuestionStore();

  return (
    <div className="my-4 flex w-full flex-col gap-4">
      {questionData &&
        questionData
          .filter((_, index) => index === questionNumber)[0]
          ?.answerDtoList.map((answer, i) => {
            return <QuestionButton key={i} index={i} label={answer.content} />;
          })}
    </div>
  );
};

export default QuestionList;
