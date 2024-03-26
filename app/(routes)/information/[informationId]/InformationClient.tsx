'use client';

import { useEffect } from 'react';
import { getCookie } from 'cookies-next';

import InformationCard from '@/app/(routes)/information/[informationId]/_component/InformationCard';
import InformationFooter from '@/app/(routes)/information/[informationId]/_component/InformationFooter';
import InformationHeader from '@/app/(routes)/information/[informationId]/_component/InformationHeader';
import useTokenStore from '@/app/store/token';
import useScrapStore, { scrapListProps } from '@/app/store/scrap';
import { getScrapList } from '@/app/services/scrap';

const InformationClient = () => {
  const { hasToken, isLogin } = useTokenStore();
  const { setScrapData, setScrapAddressData } = useScrapStore();

  useEffect(() => {
    const setScrapList = async () => {
      const access_token = getCookie('access_token');
      const scrapList = await getScrapList(access_token as string);
      setScrapData(scrapList);

      if (scrapList.length !== 0) {
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
    <main className="flex h-full w-full flex-col items-center overflow-y-auto overflow-x-hidden">
      <InformationHeader />
      <InformationCard />
      <div className="flex-1" />
      <InformationFooter />
    </main>
  );
};

export default InformationClient;
