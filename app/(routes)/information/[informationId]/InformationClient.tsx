'use client';

import { useEffect } from 'react';
import { getCookie } from 'cookies-next';

import InformationCard from '@/app/components/information/InformationCard';
import InformationFooter from '@/app/components/information/InformationFooter';
import InformationHeader from '@/app/components/information/InformationHeader';
import useRecommendStore, {
  imageZipProps,
  recommendProps,
} from '@/app/store/recommend';
import useTokenStore from '@/app/store/token';
import useScrapStore, { scrapListProps } from '@/app/store/scrap';
import { getScrapList } from '@/app/services/scrap';

const InformationClient = ({
  infomationList,
  imageZip,
}: {
  infomationList: recommendProps;
  imageZip: imageZipProps[];
}) => {
  const { title, category, address, roadAddress } = infomationList;
  const { hasToken, isLogin } = useTokenStore();
  const { setInformation } = useRecommendStore();
  const { setScrapData, setScrapAddressData } = useScrapStore();

  useEffect(() => {
    setInformation({
      title,
      category,
      address,
      roadAddress,
      imageZip,
    });

    const setScrapList = async () => {
      const access_token = getCookie('access_token');
      const scrapList = await getScrapList(String(access_token));
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
  }, [
    address,
    category,
    hasToken,
    imageZip,
    isLogin,
    roadAddress,
    setInformation,
    setScrapAddressData,
    setScrapData,
    title,
  ]);

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
