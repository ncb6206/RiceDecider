'use client';

import { useParams, useRouter } from 'next/navigation';

import Button from '@/app/components/button/Button';
import TextButton from '@/app/components/button/TextButton';
import useSwipeStore from '@/app/store/swipe';
import parseRecommendId from '@/app/utils/parseRecommendId';

const RecommendFooter = () => {
  const params = useParams();
  const { isSwipe } = useSwipeStore();
  const router = useRouter();
  const { addressParam, categoryParam, tagParam } = parseRecommendId(
    params.recommendId as string,
  );

  const onClick = () => {
    if (categoryParam === '아시안') {
      return router.push(`/recommend/${addressParam} ${categoryParam}음식`);
    }

    return router.push(`/recommend/${addressParam} ${categoryParam}`);
  };

  const goCategory = () => {
    router.push('/category');
  };

  return (
    <div className="my-2 mb-10 flex w-full flex-col gap-5 px-6">
      {isSwipe && (
        <>
          {tagParam && (
            <Button
              label={`주변 ${categoryParam} 더보기`}
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
      {!isSwipe && (
        <>
          {tagParam && (
            <Button
              label={`주변 ${categoryParam} 더보기`}
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
