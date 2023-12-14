'use client';

import { useEffect } from 'react';

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
import useTokenStore from '@/app/hooks/useToken';
import { getRecommendImage } from '@/app/services/image';
import useScrapStore, { scrapListProps } from '@/app/hooks/useScrap';
import { getScrapList } from '@/app/services/scrap';
import { getCookie } from 'cookies-next';

interface RecommendClientProps {
  recommendList: recommendProps[];
}

const RecommendClient = ({ recommendList }: RecommendClientProps) => {
  const useSwipe = useSwipeStore(state => state);
  const { hasToken, isLogin } = useTokenStore();

  useEffect(() => {
    useRecommendStore.setState({
      recommendData: recommendList.slice(0, 4),
    });

    Promise.all(
      recommendList.slice(0, 4).map(async (item: recommendProps) => {
        const imageUrl: imageZipProps[] = await getRecommendImage(item.title);
        if (imageUrl?.length !== 0) {
          return imageUrl[0]?.image_url;
        }
        return 'https://img.freepik.com/premium-vector/default-image-icon-vector-missing-picture-page-for-website-design-or-mobile-app-no-photo-available_87543-11093.jpg';
      }),
    ).then(imageUrls => {
      useRecommendStore.setState({
        recommendImage: imageUrls,
      });
    });

    const setScrapList = async () => {
      const access_token = getCookie('access_token');
      const scrapList = await getScrapList(String(access_token));
      useScrapStore.setState({ scrapData: scrapList });

      if (scrapList.length !== 0) {
        useScrapStore.setState({
          scrapAddressData: scrapList?.map((scrap: scrapListProps) => {
            return scrap.restaurantAddress;
          }),
        });
      }
    };

    hasToken();
    if (isLogin) {
      setScrapList();
    }
  }, [hasToken, isLogin, recommendList]);

  return (
    <main
      className={`flex h-full w-full flex-col items-center overflow-y-auto overflow-x-hidden ${
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
