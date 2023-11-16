'use client';

import InformationCard from '@/app/components/information/InformationCard';
import InformationFooter from '@/app/components/information/InformationFooter';
import InformationHeader from '@/app/components/information/InformationHeader';
import useRecommendStore, { recommendProps } from '@/app/hooks/useRecommend';
import { useEffect } from 'react';

const InformationClient = ({
  recommendList,
  imageUrl,
}: {
  recommendList: recommendProps;
  imageUrl: string;
}) => {
  useEffect(() => {
    // console.log(recommendList, imageUrl);
    useRecommendStore.setState({
      recommend: {
        title: recommendList.title,
        category: recommendList.category,
        address: recommendList.address,
        roadAddress: recommendList.roadAddress,
        imageSrc: imageUrl,
      },
    });
  }, [imageUrl, recommendList]);

  return (
    <main className="flex h-full w-full flex-col items-center">
      <InformationHeader />
      <InformationCard />
      <div className="flex-1" />
      <InformationFooter />
    </main>
  );
};

export default InformationClient;
