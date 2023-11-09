'use client';

import { MouseEvent } from 'react';

interface ResultButtonProps {
  label: string;
  onClick: (e: MouseEvent<HTMLButtonElement>) => void;
}

const ResultButton = ({ label, onClick }: ResultButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`relative h-14 w-full select-none rounded-[3rem] bg-lime-500 text-lg font-semibold leading-normal tracking-wider text-neutral-600 transition hover:opacity-80
      `}
    >
      {label}
    </button>
  );
};

export default ResultButton;
