'use client';

import { useState } from 'react';

import Button from '@/app/components/button/Button';
import ResultButton from '@/app/components/button/ResultButton';

const QuestionFooter = () => {
  const [disable, setDisable] = useState(true);
  const [finish, setFinish] = useState(false);

  const onClick = () => {};

  const onClicked = () => {};

  return (
    <div className="my-2 mb-10 flex w-full flex-col">
      {!finish && (
        <Button
          label="골랐어요!"
          disabled={disable}
          onClick={onClick}
          outline={false}
        />
      )}
      {finish && <ResultButton label="밥정너 결과보기" onClick={onClicked} />}
    </div>
  );
};

export default QuestionFooter;
