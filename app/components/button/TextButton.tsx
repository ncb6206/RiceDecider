'use client';

interface TextButtonProps {
  label: string;
  onClick?: () => void;
  className?: string;
}

const TextButton = ({ label, onClick, className }: TextButtonProps) => {
  return (
    <button className={`text-neutral-400 ${className}`} onClick={onClick}>
      {label}
    </button>
  );
};

export default TextButton;
