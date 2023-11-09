'use client';

import QuestionButton from '@/app/components/button/QuestionButton';

const QuestionList = () => {
  return (
    <div className="my-4 flex w-full flex-col gap-4">
      {questionList &&
        questionList.map((question, index) => {
          return (
            <QuestionButton
              key={index}
              label={question.label}
              selected={question.selected}
            />
          );
        })}
    </div>
  );
};

export default QuestionList;

const questionList = [
  { label: '1인', selected: false },
  { label: '2인', selected: false },
  { label: '3인', selected: true },
  { label: '4인', selected: false },
  { label: '5인', selected: false },
];
