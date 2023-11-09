'use client';

import { MouseEvent } from 'react';

interface ButtonProps {
  label: string;
  onClick: (e: MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  outline?: boolean;
  small?: boolean;
  className?: string;
}

const Button = ({
  label,
  onClick,
  disabled,
  outline,
  className,
}: ButtonProps) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`relative h-14 w-full select-none rounded-3xl border-2 text-lg font-medium transition hover:opacity-80 disabled:cursor-not-allowed disabled:border-0 disabled:bg-neutral-200 disabled:text-neutral-500 ${className}
  ${
    outline
      ? 'border-[1px] border-rose-500 bg-white text-rose-500'
      : 'border-rose-500 bg-rose-500 text-white'
  }   
  `}
    >
      {label}
    </button>
  );
};

export default Button;
