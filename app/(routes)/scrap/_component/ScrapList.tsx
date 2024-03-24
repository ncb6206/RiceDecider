'use client';

import Logo from '@/public/logo.svg';
import FavoriteCard from '@/app/(routes)/scrap/_component/ScrapCard';
import useScrapStore, { scrapListProps } from '@/app/store/scrap';

const ScrapList = () => {
  const { scrapData } = useScrapStore();

  // console.log(useScrap.scrapData);

  return (
    <div className="flex h-full w-full flex-col p-4">
      {scrapData.length !== 0 &&
        scrapData?.map((scrap: scrapListProps, i: number) => {
          return (
            <FavoriteCard
              key={i}
              title={scrap.restaurantTitle}
              category={scrap.category}
              address={scrap.restaurantAddress}
            />
          );
        })}

      {scrapData.length === 0 && (
        <div className=" flex h-full flex-col items-center justify-center gap-4">
          <Logo fill="#E14E4B" width="70" height="70" />
          <p className="text-lg font-semibold text-gray-900">
            아직 저장한 식당이 없네요!
          </p>
        </div>
      )}
    </div>
  );
};

export default ScrapList;
