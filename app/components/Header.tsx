'use client';

import { IconType } from 'react-icons';
import { VscBlank } from 'react-icons/vsc';

import ProgressBar from '@/app/components/ProgressBar';
import TextButton from '@/app/components/button/TextButton';
import useQuestionStore, {
  QuestionDataProps,
} from '@/app/hooks/useQuestionStore';

interface HeaderProps {
  leftIcon?: IconType;
  leftOnClick?: () => void;
  label?: string;
  progress?: boolean;
  progressData?: Array<QuestionDataProps>;
  rightIcon?: IconType;
  rightOnClick?: () => void;
  rightText?: string;
  className?: string;
}

const Header = ({
  leftIcon: LeftIcon,
  leftOnClick,
  label,
  progress,
  rightIcon: RightIcon,
  rightOnClick,
  rightText,
  className,
}: HeaderProps) => {
  const useQuestion = useQuestionStore(state => state);

  return (
    <div
      className={`relative flex w-full items-center justify-between text-gray-900 ${className}`}
    >
      {LeftIcon && (
        <LeftIcon
          size={30}
          className={`${
            LeftIcon !== VscBlank && 'hover:cursor-pointer'
          } mr-auto`}
          onClick={leftOnClick}
        />
      )}
      {label && <p className="mx-auto font-SBAggro text-lg">{label}</p>}
      {progress && (
        <div className="absolute left-[8rem]">
          <ProgressBar />
        </div>
      )}
      {RightIcon && (
        <RightIcon
          size={30}
          className={`${
            RightIcon !== VscBlank && 'hover:cursor-pointer'
          } ml-auto`}
          onClick={rightOnClick}
        />
      )}
      {rightText &&
        useQuestion.questionData.length !== useQuestion.questionNumber + 1 && (
          <TextButton label={rightText} onClick={rightOnClick} />
        )}
    </div>
  );
};

export default Header;
