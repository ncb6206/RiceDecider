'use client';

import FavoriteHeader from '@/app/components/favorite/FavoriteHeader';
import FavoriteList from '@/app/components/favorite/FavoriteList';

const FavoriteClient = () => {
  return (
    <main className="flex h-full flex-col items-center overflow-auto">
      <FavoriteHeader />
      <FavoriteList />
    </main>
  );
};

export default FavoriteClient;
