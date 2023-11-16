'use client';

import RecommendFooter from '@/app/components/recommend/RecommendFooter';
import RecommendHeader from '@/app/components/recommend/RecommendHeader';
import RecommendList from '@/app/components/recommend/RecommendList';
import RecommendTitle from '@/app/components/recommend/RecommendTitle';
import useRecommendStore, { recommendProps } from '@/app/hooks/useRecommend';
import useSwipeStore from '@/app/hooks/useSwipeStore';
import { getImage } from '@/app/services/image';
import { useEffect } from 'react';

const RecommendClient = ({
  recommendList,
}: {
  recommendList: recommendProps[];
}) => {
  const useSwipe = useSwipeStore(state => state);

  useEffect(() => {
    useRecommendStore.setState({
      recommendData: recommendList.slice(0, 4),
    });

    Promise.all(
      recommendList.slice(0, 4).map(async (item: recommendProps) => {
        const imageUrl: any = await getImage(item.title, false);
        if (imageUrl.items.length !== 0) {
          return imageUrl.items[0].link;
        }
        return 'https://source.unsplash.com/random/?cat';
      }),
    ).then(imageUrls => {
      useRecommendStore.setState({
        recommendImage: imageUrls,
      });
    });
  }, [recommendList]);

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
