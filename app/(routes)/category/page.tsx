import CategoryFooter from '@/app/(routes)/category/_component/CategoryFooter';
import CategoryTitle from '@/app/(routes)/category/_component/CategoryTitle';
import CategoryList from '@/app/(routes)/category/_component/CategoryList';
import CategoryHeader from '@/app/(routes)/category/_component/CategoryHeader';

const CategoryPage = () => {
  return (
    <main className="mx-4 flex h-full flex-col items-center overflow-auto">
      <CategoryHeader />
      <CategoryTitle />
      <CategoryList />
      <div className="flex-1" />
      <CategoryFooter />
    </main>
  );
};

export default CategoryPage;
