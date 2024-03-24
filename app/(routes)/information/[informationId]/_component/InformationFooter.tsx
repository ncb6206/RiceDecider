'use client';

import Button from '@/app/components/button/Button';
import { getInformation } from '@/app/services/information';
import { recommendProps } from '@/app/store/recommend';
import cleanTitle from '@/app/utils/cleanTitle';
import clearWord from '@/app/utils/clearWord';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'next/navigation';

const InformationFooter = () => {
  const params = useParams();
  const [locationParam, titleParam] = decodeURI(
    params.informationId as string,
  ).split('%26');

  const { data: informationList } = useQuery({
    queryKey: ['information'],
    queryFn: () => getInformation(`${locationParam} ${titleParam}`, 'client'),
  });

  const informationData: recommendProps = informationList?.items?.find(
    (item: recommendProps) => clearWord(item.title) === clearWord(titleParam),
  );

  const onClick = () => {
    window.open(
      `https://map.naver.com/p/search/${cleanTitle(informationData?.title)}`,
    );
  };

  return (
    <div className="mb-8 mt-2 w-full px-3">
      <Button label="식당 보러가기" onClick={onClick} className="rounded-3xl" />
    </div>
  );
};

export default InformationFooter;
