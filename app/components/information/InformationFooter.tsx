'use client';

import Button from '@/app/components/button/Button';
import useRecommendStore from '@/app/store/recommend';
import cleanTitle from '@/app/utils/cleanTitle';

const InformationFooter = () => {
  const { information } = useRecommendStore();

  const onClick = () => {
    window.open(
      `https://map.naver.com/p/search/${cleanTitle(information.title)}`,
    );
  };

  return (
    <div className="mb-8 mt-2 w-full px-3">
      <Button label="식당 보러가기" onClick={onClick} className="rounded-3xl" />
    </div>
  );
};

export default InformationFooter;
