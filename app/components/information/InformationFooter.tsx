'use client';

import Button from '@/app/components/button/Button';
import useRecommendStore from '@/app/hooks/useRecommend';

const InformationFooter = () => {
  const useRecommend = useRecommendStore(state => state);

  const onClick = () => {
    window.open(
      `https://map.naver.com/p/search/${useRecommend.information.title.replace(
        /<\/?[^>]+(>|$)/g,
        '',
      )}`,
    );
  };

  return (
    <div className="mb-8 mt-2 w-full px-3">
      <Button label="식당 보러가기" onClick={onClick} className="rounded-3xl" />
    </div>
  );
};

export default InformationFooter;
