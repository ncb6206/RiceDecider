'use client';

import InformationCard from '@/app/components/information/InformationCard';
import InformationFooter from '@/app/components/information/InformationFooter';
import InformationHeader from '@/app/components/information/InformationHeader';
import useRecommendStore, {
  imageZipProps,
  recommendProps,
} from '@/app/hooks/useRecommend';
import { useEffect } from 'react';

const InformationClient = ({
  infomationList,
  imageZip,
}: {
  infomationList: recommendProps;
  imageZip: imageZipProps[];
}) => {
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
  }, [imageZip, infomationList]);

  return (
    <main className="flex h-full w-full flex-col items-center overflow-auto">
      <InformationHeader />
      <InformationCard />
      <div className="flex-1" />
      <InformationFooter />
    </main>
  );
};

export default InformationClient;
