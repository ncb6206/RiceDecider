'use client';

import Image from 'next/image';
import Slider from 'react-slick';

import '@/app/slick.css';
import InformationKeyword from '@/app/components/information/informationKeyword';
import useRecommendStore from '@/app/store/recommend';
import SlickSetting from '@/app/components/slickSetting';

const InformationCard = () => {
  const { title, category, address, roadAddress, imageZip } = useRecommendStore(
    state => state.information,
  );

  return (
    <div className="w-full">
      <Slider {...SlickSetting('information_dots')}>
        {imageZip?.length !== 0 &&
          imageZip?.map((imageUrl, i) => (
            <Image
              key={i}
              src={imageUrl.image_url}
              alt="매장 사진"
              width={400}
              height={400}
              className="h-[22rem] w-full"
            />
          ))}
      </Slider>
      <div className="flex flex-col gap-3 p-6 font-medium">
        <p
          className="text-lg font-semibold text-gray-900 "
          dangerouslySetInnerHTML={{ __html: title }}
        />
        <div className="flex gap-2">
          <InformationKeyword label={category || ''} />
          {/* {keywords.map((keyword, i) => {
            return <InformationKeyword key={i} label={keyword} />;
          })} */}
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-gray-600">주소</p>
          <p className="underline">{address}</p>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-gray-600">도로명주소</p>
          <p>{roadAddress}</p>
        </div>
      </div>
    </div>
  );
};

export default InformationCard;
