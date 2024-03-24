'use client';

import Image from 'next/image';
import Slider from 'react-slick';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'next/navigation';

import '@/app/slick.css';
import InformationKeyword from '@/app/(routes)/information/[informationId]/_component/informationKeyword';
import { imageZipProps, recommendProps } from '@/app/store/recommend';
import SlickSetting from '@/app/components/slickSetting';
import { getInformation } from '@/app/services/information';
import { getImages } from '@/app/services/image';
import clearWord from '@/app/utils/clearWord';

const InformationCard = () => {
  const params = useParams();
  const [locationParam, titleParam] = decodeURI(
    params.informationId as string,
  ).split('%26');

  const { data: informationList } = useQuery({
    queryKey: ['information'],
    queryFn: () => getInformation(`${locationParam} ${titleParam}`, 'client'),
  });

  const { data: imageZipData } = useQuery({
    queryKey: ['information', 'image'],
    queryFn: () => getImages(`${titleParam}`),
  });

  const informationData: recommendProps = informationList?.items?.find(
    (item: recommendProps) => clearWord(item.title) === clearWord(titleParam),
  );

  const imageZip: imageZipProps[] = imageZipData?.documents;

  return (
    <div className="w-full">
      <Slider {...SlickSetting('information_dots')}>
        {imageZip?.length !== 0 &&
          imageZip?.map((imageUrl: imageZipProps, i: number) => (
            <Image
              key={i}
              src={imageUrl.image_url}
              alt="매장 사진"
              loading="lazy"
              width={400}
              height={400}
              className="h-[22rem] w-full"
            />
          ))}
      </Slider>
      <div className="flex flex-col gap-3 p-6 font-medium">
        <p
          className="text-lg font-semibold text-gray-900 "
          dangerouslySetInnerHTML={{ __html: informationData?.title }}
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
