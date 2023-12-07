'use client';
import Logo from '@/public/logo.svg';
import FavoriteCard from '@/app/components/favorite/ScrapCard';
import {
  ScrapClientProps,
  scrapListProps,
} from '@/app/(scrap)/(routes)/scrap/ScrapClient';

const ScrapList = ({ scrapList }: ScrapClientProps) => {
  return (
    <div className="flex h-full w-full flex-col p-4">
      {scrapList &&
        scrapList.map((scrap: scrapListProps, i: number) => {
          return (
            <FavoriteCard
              key={i}
              title={scrap.restaurantTitle}
              category={scrap.category}
              address={scrap.restaurantAddress}
            />
          );
        })}

      {!scrapList && (
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
