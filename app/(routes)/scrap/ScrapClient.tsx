'use client';

import { useEffect } from 'react';

import ScrapHeader from '@/app/(routes)/scrap/_component/ScrapHeader';
import ScrapList from '@/app/(routes)/scrap/_component/ScrapList';
import useScrapStore, { scrapListProps } from '@/app/store/scrap';

interface ScrapClientProps {
  scrapList: scrapListProps[];
}

const ScrapClient = ({ scrapList }: ScrapClientProps) => {
  const scrapStore = useScrapStore();

  useEffect(() => {
    scrapStore.setScrapData(scrapList);
  }, [scrapList, scrapStore]);

  return (
    <main className="flex h-full flex-col items-center overflow-y-auto overflow-x-hidden">
      <ScrapHeader />
      <ScrapList />
    </main>
  );
};

export default ScrapClient;
