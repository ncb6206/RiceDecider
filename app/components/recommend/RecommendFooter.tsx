'use client';

import Button from '@/app/components/button/Button';
import TextButton from '@/app/components/button/TextButton';
import useSwipeStore from '@/app/hooks/useSwipeStore';
import { useParams, useRouter } from 'next/navigation';

const RecommendFooter = () => {
  const params = useParams();
  const useSwipe = useSwipeStore();
  const router = useRouter();
  const splitRecom = decodeURI(String(params.recommendId)).split(' ');

  const onClick = () => {
    if (splitRecom[1] === '아시안') {
      return router.push(`/recommend/${splitRecom[0]} ${splitRecom[1]} 음식`);
    }

    return router.push(`/recommend/${splitRecom[0]} ${splitRecom[1]}`);
  };

  const goCategory = () => {
    router.push('/category');
  };

  return (
    <div className="my-2 mb-10 flex w-full flex-col gap-5 px-6">
      {useSwipe.isSwipe && (
        <>
          {(splitRecom.length === 4 ||
            (splitRecom.length === 3 && splitRecom[2] !== '음식')) && (
            <Button
              label={`${splitRecom[1]}만 보고싶어요!`}
              onClick={onClick}
              outline={true}
            />
          )}
          <TextButton
            label="처음부터 다시 할래요"
            onClick={goCategory}
            className="mx-auto text-white"
          />
        </>
      )}
      {!useSwipe.isSwipe && (
        <>
          {(splitRecom.length === 4 ||
            (splitRecom.length === 3 && splitRecom[2] !== '음식')) && (
            <Button
              label={`${splitRecom[1]}만 보고싶어요!`}
              onClick={onClick}
              outline={false}
            />
          )}
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
