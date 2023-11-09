'use client';

import Button from '@/app/components/button/Button';
import TextButton from '@/app/components/button/TextButton';

const RecommendFooter = () => {
  const swipe = true;
  const onClick = () => {};

  const onClickText = () => {};

  return (
    <div className="my-2 mb-10 flex w-full flex-col gap-5 px-6">
      {swipe && (
        <>
          <Button label="다시 골라주세요!" onClick={onClick} outline={true} />
          <TextButton
            label="처음부터 다시 할래요"
            onClick={onClickText}
            className="mx-auto text-white"
          />
        </>
      )}
      {!swipe && (
        <>
          <Button label="다시 골라주세요!" onClick={onClick} outline={false} />
          <TextButton
            label="처음부터 다시 할래요"
            onClick={onClickText}
            className="mx-auto"
          />
        </>
      )}
    </div>
  );
};

export default RecommendFooter;
