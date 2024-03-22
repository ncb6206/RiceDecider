'use client';

import Logo from '@/public/logo.svg';
import useQuestionStore from '@/app/store/question';

const ProgressBar = () => {
  const { questionData, questionNumber } = useQuestionStore();

  return (
    <div className="gap2 flex">
      {Array(questionData.length)
        .fill(0)
        .map((_, i) => {
          if (i - (questionNumber + 1) < 0) {
            return <Logo key={i} fill="#E14E4B" width="30" height="30" />;
          } else {
            return <Logo key={i} fill="#FACACF" width="30" height="30" />;
          }
        })}
    </div>
  );
};

export default ProgressBar;
