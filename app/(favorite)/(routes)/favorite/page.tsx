import FavoriteHeader from '@/app/components/favorite/FavoriteHeader';
import FavoriteList from '@/app/components/favorite/FavoriteList';

const FavoritePage = () => {
  return (
    <main className="flex h-full flex-col items-center">
      <FavoriteHeader />
      <FavoriteList />
    </main>
  );
};

export default FavoritePage;
