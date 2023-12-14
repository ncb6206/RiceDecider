'use client';

import ScrapHeader from '@/app/components/favorite/ScrapHeader';
import ScrapList from '@/app/components/favorite/ScrapList';
import useScrapStore, { scrapListProps } from '@/app/hooks/useScrap';
import { useEffect } from 'react';

interface ScrapClientProps {
  scrapList: scrapListProps[];
}

const ScrapClient = ({ scrapList }: ScrapClientProps) => {
  useEffect(() => {
    useScrapStore.setState({
      scrapData: scrapList,
    });
  }, [scrapList]);

  return (
    <main className="flex h-full flex-col items-center overflow-y-auto overflow-x-hidden">
      <ScrapHeader />
      <ScrapList />
    </main>
  );
};

export default ScrapClient;
