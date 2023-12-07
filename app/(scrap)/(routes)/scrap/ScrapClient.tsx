'use client';

import ScrapHeader from '@/app/components/favorite/ScrapHeader';
import ScrapList from '@/app/components/favorite/ScrapList';

export interface scrapListProps {
  memberEmail: string;
  detailURL: string;
  restaurantTitle: string;
  category: string;
  restaurantAddress: string;
}

export interface ScrapClientProps {
  scrapList: scrapListProps[];
}

const ScrapClient = ({ scrapList }: ScrapClientProps) => {
  return (
    <main className="flex h-full flex-col items-center overflow-auto">
      <ScrapHeader />
      <ScrapList scrapList={scrapList} />
    </main>
  );
};

export default ScrapClient;
