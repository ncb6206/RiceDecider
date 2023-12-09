'use client';

import Empty from '@/app/components/Empty';
import RecommendFooter from '@/app/components/recommend/RecommendFooter';
import RecommendHeader from '@/app/components/recommend/RecommendHeader';
import RecommendList from '@/app/components/recommend/RecommendList';
import RecommendTitle from '@/app/components/recommend/RecommendTitle';
import useRecommendStore, {
  imageZipProps,
  recommendProps,
} from '@/app/hooks/useRecommend';
import useSwipeStore from '@/app/hooks/useSwipeStore';
import { getRecommendImage } from '@/app/services/image';
import { useEffect } from 'react';

interface RecommendClientProps {
  recommendList: recommendProps[];
}

const RecommendClient = ({ recommendList }: RecommendClientProps) => {
  const useSwipe = useSwipeStore(state => state);

  useEffect(() => {
    useRecommendStore.setState({
      recommendData: recommendList.slice(0, 4),
    });

    Promise.all(
      recommendList.slice(0, 4).map(async (item: recommendProps) => {
        const imageUrl: imageZipProps[] = await getRecommendImage(
          item.title,
          false,
        );
        if (imageUrl?.length !== 0) {
          return imageUrl[0]?.link;
        }
        return 'https://source.unsplash.com/random';
      }),
    ).then(imageUrls => {
      useRecommendStore.setState({
        recommendImage: imageUrls,
      });
    });
  }, [recommendList]);

  return (
    <main
      className={`flex h-full w-full flex-col items-center overflow-auto ${
        useSwipe.isSwipe ? 'bg-rose-500' : 'bg-white'
      }`}
    >
      <RecommendHeader />
      <RecommendTitle />
      {recommendList.length === 0 && <Empty />}
      {recommendList.length !== 0 && <RecommendList />}
      <div className="flex-1" />
      <RecommendFooter />
    </main>
  );
};

export default RecommendClient;
