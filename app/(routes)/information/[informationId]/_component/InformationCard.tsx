'use client';

import Image from 'next/image';
import Slider from 'react-slick';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'next/navigation';

import '@/app/slick.css';
import InformationKeyword from '@/app/(routes)/information/[informationId]/_component/informationKeyword';
import SlickSetting from '@/app/components/slickSetting';
import { getInformation } from '@/app/services/information';
import { getImages } from '@/app/services/image';
import clearWord from '@/app/utils/clearWord';
import { Skeleton } from '@/app/components/ui/skeleton';
import { RestaurantProps } from '@/app/models/Restaurant';
import parseInformationId from '@/app/utils/parseInformationId';
import { imageZipProps } from '@/app/models/Image';

const InformationCard = () => {
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

  const { data: imageZipData, isLoading } = useQuery({
    queryKey: ['information', 'image', `${titleParam}`],
    queryFn: getImages,
    staleTime: 120 * 1000,
    gcTime: 300 * 1000,
  });

  const informationData = informationList?.items?.find(
    (item: RestaurantProps) => clearWord(item.title) === clearWord(titleParam),
  );

  const imageZip = imageZipData?.documents;

  return (
    <div className="w-full">
      <div className="w-full">
        {isLoading && !imageZip && <Skeleton className="h-[22rem] w-full" />}
        <Slider {...SlickSetting('information_dots')}>
          {imageZip &&
            imageZip?.map((imageUrl: imageZipProps, i: number) => (
              <div key={i} className="relative h-[22rem] w-full">
                <Image
                  key={i}
                  src={imageUrl.image_url}
                  alt="매장 사진"
                  fill
                  sizes="300px"
                  priority
                />
              </div>
            ))}
        </Slider>
      </div>
      <div className="flex flex-col gap-3 p-6 font-medium">
        <p
          className="text-lg font-semibold text-gray-900 "
          dangerouslySetInnerHTML={{ __html: informationData?.title as string }}
        />
        <div className="flex gap-2">
          <InformationKeyword label={informationData?.category || ''} />
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-gray-600">주소</p>
          <p className="underline">{informationData?.address}</p>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-gray-600">도로명주소</p>
          <p>{informationData?.roadAddress}</p>
        </div>
      </div>
    </div>
  );
};

export default InformationCard;
