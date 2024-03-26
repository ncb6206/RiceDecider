'use client';

import { useEffect } from 'react';
import { getCookie } from 'cookies-next';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'next/navigation';

import Empty from '@/app/components/Empty';
import RecommendFooter from '@/app/(routes)/recommend/[recommendId]/_component/RecommendFooter';
import RecommendHeader from '@/app/(routes)/recommend/[recommendId]/_component/RecommendHeader';
import RecommendList from '@/app/(routes)/recommend/[recommendId]/_component/RecommendList';
import RecommendTitle from '@/app/(routes)/recommend/[recommendId]/_component/RecommendTitle';
import useSwipeStore from '@/app/store/swipe';
import useTokenStore from '@/app/store/token';
import useScrapStore, { scrapListProps } from '@/app/store/scrap';
import { getScrapList } from '@/app/services/scrap';
import { getRecommend } from '@/app/services/recommend';

const RecommendClient = () => {
  const useSwipe = useSwipeStore();
  const { recommendId } = useParams();
  const { hasToken, isLogin } = useTokenStore();
  const { setScrapData, setScrapAddressData } = useScrapStore();
  const { data: recommendList } = useQuery({
    queryKey: ['recommends', decodeURI(recommendId as string)],
    queryFn: getRecommend,
    staleTime: 120 * 1000,
    gcTime: 300 * 1000,
  });

  // console.log(decodeURI(recommendId as string), recommendList?.items);

  useEffect(() => {
    const setScrapList = async () => {
      const access_token = getCookie('access_token');
      const scrapList = await getScrapList(access_token as string);
      // console.log(scrapList, scrapList.length);

      if (scrapList.length !== 0) {
        setScrapData(scrapList);
        setScrapAddressData(
          scrapList?.map((scrap: scrapListProps) => scrap.restaurantAddress),
        );
      }
    };

    hasToken();
    if (isLogin) {
      setScrapList();
    }
  }, [hasToken, isLogin, setScrapAddressData, setScrapData]);

  return (
    <main
      className={`flex h-full w-full flex-col items-center overflow-y-auto overflow-x-hidden ${
        useSwipe.isSwipe ? 'bg-rose-500' : 'bg-white'
      }`}
    >
      <RecommendHeader />
      <RecommendTitle />
      {recommendList?.items?.length === 0 && <Empty />}
      {recommendList?.items?.length !== 0 && <RecommendList />}
      <div className="flex-1" />
      <RecommendFooter />
    </main>
  );
};

export default RecommendClient;
