'use client';

import useQuestionStore from '@/app/store/question';

interface QuestionButtonProps {
  index: number;
  label: string;
}

const QuestionButton = ({ index, label }: QuestionButtonProps) => {
  const questionStore = useQuestionStore();

  const onSelected = () => {
    questionStore.onToggleSelect(index);
    // console.log(useQuestion);
  };

  return (
    <button
      onClick={onSelected}
      className={`relative w-full select-none rounded-[20px] border border-rose-500 p-5 text-left text-lg font-medium text-rose-500 transition md:hover:bg-rose-200 md:hover:opacity-80
      ${questionStore.selected[0] === index ? 'bg-rose-200' : 'bg-white'}
      `}
    >
      {label}
    </button>
  );
};

export default QuestionButton;
