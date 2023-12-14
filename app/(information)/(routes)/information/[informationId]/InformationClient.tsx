'use client';

import { useEffect } from 'react';

import InformationCard from '@/app/components/information/InformationCard';
import InformationFooter from '@/app/components/information/InformationFooter';
import InformationHeader from '@/app/components/information/InformationHeader';
import useRecommendStore, {
  imageZipProps,
  recommendProps,
} from '@/app/hooks/useRecommend';
import useTokenStore from '@/app/hooks/useToken';
import useScrapStore, { scrapListProps } from '@/app/hooks/useScrap';
import { getCookie } from 'cookies-next';
import { getScrapList } from '@/app/services/scrap';

const InformationClient = ({
  infomationList,
  imageZip,
}: {
  infomationList: recommendProps;
  imageZip: imageZipProps[];
}) => {
  const { hasToken, isLogin } = useTokenStore();

  useEffect(() => {
    useRecommendStore.setState({
      information: {
        title: infomationList.title,
        category: infomationList.category,
        address: infomationList.address,
        roadAddress: infomationList.roadAddress,
        imageZip,
      },
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
  }, [hasToken, imageZip, infomationList, isLogin]);

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
