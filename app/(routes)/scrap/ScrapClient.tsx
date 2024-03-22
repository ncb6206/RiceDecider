'use client';

import ScrapHeader from '@/app/components/favorite/ScrapHeader';
import ScrapList from '@/app/components/favorite/ScrapList';
import useScrapStore, { scrapListProps } from '@/app/store/scrap';
import { useEffect } from 'react';

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
