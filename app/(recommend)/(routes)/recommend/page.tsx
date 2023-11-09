import RecommendFooter from '@/app/components/recommend/RecommendFooter';
import RecommendHeader from '@/app/components/recommend/RecommendHeader';
import RecommendList from '@/app/components/recommend/RecommendList';
import RecommendTitle from '@/app/components/recommend/RecommendTitle';

const RecommendPage = () => {
  return (
    <main className="flex h-full w-full flex-col items-center bg-rose-500">
      <RecommendHeader />
      <RecommendTitle />
      <RecommendList />
      <div className="flex-1" />
      <RecommendFooter />
    </main>
  );
};

export default RecommendPage;
