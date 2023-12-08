'use client';

import { IconType } from 'react-icons';

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
      className={`relative grid w-full grid-cols-4 items-center text-gray-900 ${className}`}
    >
      <div className="ml-1 mr-auto flex items-center justify-center">
        {LeftIcon && (
          <LeftIcon
            size={30}
            className={`transition-all hover:scale-110 hover:cursor-pointer`}
            onClick={leftOnClick}
          />
        )}
      </div>
      <div className="col-span-2 flex items-center justify-center">
        {label && (
          <p
            className="mx-auto font-SBAggro text-lg "
            dangerouslySetInnerHTML={{ __html: label }}
          />
        )}
        {progress && <ProgressBar />}
      </div>
      <div className="ml-auto mr-1 flex items-center justify-center">
        {RightIcon && (
          <RightIcon
            size={30}
            className={`transition-all hover:scale-110 hover:cursor-pointer`}
            onClick={rightOnClick}
          />
        )}
        {rightText &&
          useQuestion.questionData.length !==
            useQuestion.questionNumber + 1 && (
            <TextButton label={rightText} onClick={rightOnClick} />
          )}
      </div>
    </div>
  );
};

export default Header;
