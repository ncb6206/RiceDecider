'use client';

import Button from '@/app/components/button/Button';
import TextButton from '@/app/components/button/TextButton';
import useSwipeStore from '@/app/hooks/useSwipeStore';
import { useRouter } from 'next/navigation';

const RecommendFooter = () => {
  const useSwipe = useSwipeStore();
  const router = useRouter();

  const onClick = () => {};

  const goCategory = () => {
    router.push('/category');
  };

  return (
    <div className="my-2 mb-10 flex w-full flex-col gap-5 px-6">
      {useSwipe.isSwipe && (
        <>
          <Button label="다시 골라주세요!" onClick={onClick} outline={true} />
          <TextButton
            label="처음부터 다시 할래요"
            onClick={goCategory}
            className="mx-auto text-white"
          />
        </>
      )}
      {!useSwipe.isSwipe && (
        <>
          <Button label="다시 골라주세요!" onClick={onClick} outline={false} />
          <TextButton
            label="처음부터 다시 할래요"
            onClick={goCategory}
            className="mx-auto"
          />
        </>
      )}
    </div>
  );
};

export default RecommendFooter;
