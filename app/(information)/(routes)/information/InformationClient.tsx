'use client';

import { useRouter } from 'next/navigation';

import InformationCard from '@/app/components/information/InformationCard';
import InformationFooter from '@/app/components/information/InformationFooter';
import InformationHeader from '@/app/components/information/InformationHeader';
import useRecommendStore from '@/app/hooks/useRecommend';

const InformationClient = () => {
  const router = useRouter();
  const useRecommend = useRecommendStore(state => state);

  if (!useRecommend.recommend.title) {
    router.push('/category');
    return null;
  }

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
