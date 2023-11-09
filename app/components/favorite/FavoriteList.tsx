'use client';
import Logo from '@/public/logo.svg';
import FavoriteCard from '@/app/components/favorite/FavoriteCard';

const FavoriteList = () => {
  return (
    <div className="flex h-full w-full flex-col p-4">
      {FavoriteData &&
        FavoriteData.map((favorite, i) => {
          return (
            <FavoriteCard
              key={i}
              title={favorite.title}
              category={favorite.category}
              distance={favorite.distance}
            />
          );
        })}
      {!FavoriteData && (
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

export default FavoriteList;

const FavoriteData = [
  { title: '식당이름1', category: '카테고리1', distance: '1.2' },
  { title: '식당이름2', category: '카테고리2', distance: '1.3' },
  { title: '식당이름3', category: '카테고리3', distance: '1.4' },
  { title: '식당이름3', category: '카테고리3', distance: '1.4' },
  { title: '식당이름3', category: '카테고리3', distance: '1.4' },
  { title: '식당이름3', category: '카테고리3', distance: '1.4' },
  { title: '식당이름3', category: '카테고리3', distance: '1.4' },
];
