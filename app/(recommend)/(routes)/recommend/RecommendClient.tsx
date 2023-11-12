'use client';

// import { useRouter } from 'next/navigation';

import RecommendFooter from '@/app/components/recommend/RecommendFooter';
import RecommendHeader from '@/app/components/recommend/RecommendHeader';
import RecommendList from '@/app/components/recommend/RecommendList';
import RecommendTitle from '@/app/components/recommend/RecommendTitle';
// import useRecommendStore from '@/app/hooks/useRecommend';
import useSwipeStore from '@/app/hooks/useSwipeStore';

const RecommendClient = () => {
  // const router = useRouter();
  const useSwipe = useSwipeStore(state => state);
  // const useRecommend = useRecommendStore(state => state);

  // if (useRecommend.recommendData.length === 0) {
  //   router.push('/category');
  //   return null;
  // }

  return (
    <main
      className={`flex h-full w-full flex-col items-center ${
        useSwipe.isSwipe ? 'bg-rose-500' : 'bg-white'
      }`}
    >
      <RecommendHeader />
      <RecommendTitle />
      <RecommendList />
      <div className="flex-1" />
      <RecommendFooter />
    </main>
  );
};

export default RecommendClient;
