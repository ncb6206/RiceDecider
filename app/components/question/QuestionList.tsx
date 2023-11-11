'use client';

import QuestionButton from '@/app/components/question/QuestionButton';
import useQuestionStore from '@/app/hooks/useQuestionStore';

const QuestionList = () => {
  const useQuestion = useQuestionStore(state => state);

  return (
    <div className="my-4 flex w-full flex-col gap-4">
      {/* {useQuestion.questionData &&
        useQuestion.questionData.map((question, index) =>
          question.answers.map((answer, i) => {
            return <QuestionButton key={i} label={answer} selected={true} />;
          }),
        )} */}
      {useQuestion.questionData &&
        useQuestion.questionData
          .filter((_, index) => index === useQuestion.questionNumber)[0]
          .answers.map((answer, i) => {
            return <QuestionButton key={i} index={i} label={answer} />;
          })}
    </div>
  );
};

export default QuestionList;
