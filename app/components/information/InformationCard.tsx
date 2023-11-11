'use client';

import Image from 'next/image';

import InformationKeyword from '@/app/components/information/informationKeyword';
import useRecommendStore from '@/app/hooks/useRecommend';

const InformationCard = () => {
  const useRecommend = useRecommendStore(state => state);

  return (
    <div className="w-full">
      {useRecommend.recommend.imageSrc && (
        <Image
          src={useRecommend.recommend.imageSrc}
          alt="매장 사진"
          width="500"
          height="500"
        />
      )}
      <div className="flex flex-col gap-3 p-6 font-medium">
        <p
          className="text-lg font-semibold text-gray-900 "
          dangerouslySetInnerHTML={{ __html: useRecommend.recommend.title }}
        />
        <div className="flex gap-2">
          <InformationKeyword label={useRecommend.recommend.category || ''} />
          {/* {keywords.map((keyword, i) => {
            return <InformationKeyword key={i} label={keyword} />;
          })} */}
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-gray-600">주소</p>
          <p className="underline">{useRecommend.recommend.address}</p>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-gray-600">도로명주소</p>
          <p>{useRecommend.recommend.roadAddress}</p>
        </div>
        {/* <p className="text-base font-medium text-gray-900">영업 정보</p>
        <div className="flex gap-2">
          <p className="text-gray-600">시간</p>
          <p>{time}</p>
        </div>
        <div className="flex gap-2">
          <p className="text-gray-600">휴무</p>
          <p>{hoomo} </p>
        </div> */}
      </div>
    </div>
  );
};

export default InformationCard;
