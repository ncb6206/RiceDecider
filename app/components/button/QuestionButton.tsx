'use client';

interface QuestionButtonProps {
  label: string;
  selected: boolean;
}

const QuestionButton = ({ label, selected }: QuestionButtonProps) => {
  return (
    <button
      className={`relative w-full select-none rounded-[20px] border border-rose-500 p-5 text-left text-lg font-medium text-rose-500 transition hover:bg-rose-200 hover:opacity-80 ${
        selected ? 'bg-rose-200' : 'bg-white'
      }`}
    >
      {label}
    </button>
  );
};

export default QuestionButton;
