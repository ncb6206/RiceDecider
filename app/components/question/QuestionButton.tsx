'use client';

import useQuestionStore from '@/app/hooks/useQuestionStore';

interface QuestionButtonProps {
  index: number;
  label: string;
}

const QuestionButton = ({ index, label }: QuestionButtonProps) => {
  const useQuestion = useQuestionStore(state => state);

  const onSelected = () => {
    useQuestion.onToggleSelect(index);
    console.log(useQuestion);
  };

  return (
    <button
      onClick={onSelected}
      className={`relative w-full select-none rounded-[20px] border border-rose-500 p-5 text-left text-lg font-medium text-rose-500 transition hover:bg-rose-200 hover:opacity-80
      ${useQuestion.selected[index] ? 'bg-rose-200' : 'bg-white'}
      `}
    >
      {label}
    </button>
  );
};

export default QuestionButton;
