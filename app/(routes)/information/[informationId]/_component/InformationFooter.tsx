'use client';

import Button from '@/app/components/button/Button';
import { RestaurantProps } from '@/app/models/Restaurant';
import { getInformation } from '@/app/services/information';
import cleanTitle from '@/app/utils/cleanTitle';
import clearWord from '@/app/utils/clearWord';
import parseInformationId from '@/app/utils/parseInformationId';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'next/navigation';

const InformationFooter = () => {
  const params = useParams();
  const { locationParam, titleParam } = parseInformationId(
    params.informationId as string,
  );

  const { data: informationList } = useQuery({
    queryKey: ['information', `${locationParam} ${titleParam}`],
    queryFn: getInformation,
    staleTime: 120 * 1000,
    gcTime: 300 * 1000,
  });

  const informationData = informationList?.items?.find(
    (item: RestaurantProps) => clearWord(item.title) === clearWord(titleParam),
  );

  const onClick = () => {
    window.open(
      `https://map.naver.com/p/search/${cleanTitle(
        informationData?.title as string,
      )}`,
    );
  };

  return (
    <div className="mb-8 mt-2 w-full px-3">
      <Button label="식당 보러가기" onClick={onClick} className="rounded-3xl" />
    </div>
  );
};

export default InformationFooter;
