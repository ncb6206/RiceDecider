'use client';

import Image from 'next/image';

import InformationKeyword from '@/app/components/information/informationKeyword';

interface InformationCardProps {
  imageUrl: string;
  Name: string;
  keywords: Array<string>;
  address: string;
  tel: string;
  time: string;
  hoomo: string;
}

const InformationCard = ({
  imageUrl,
  Name,
  keywords,
  address,
  tel,
  time,
  hoomo,
}: InformationCardProps) => {
  return (
    <div className="w-full">
      <Image src={imageUrl} alt="매장 사진" width="500" height="500" />
      <div className="flex flex-col gap-3 p-6 font-medium">
        <p className="text-lg font-semibold text-gray-900 ">{Name}</p>
        <div className="flex gap-2">
          {keywords.map((keyword, i) => {
            return <InformationKeyword key={i} label={keyword} />;
          })}
        </div>
        <div className="flex gap-2">
          <p className="text-gray-600">주소</p>
          <p className="underline">{address}</p>
        </div>
        <div className="flex gap-2">
          <p className="text-gray-600">전화</p>
          <p>{tel}</p>
        </div>
        <p className="text-base font-medium text-gray-900">영업 정보</p>
        <div className="flex gap-2">
          <p className="text-gray-600">시간</p>
          <p>{time}</p>
        </div>
        <div className="flex gap-2">
          <p className="text-gray-600">휴무</p>
          <p>{hoomo} </p>
        </div>
      </div>
    </div>
  );
};

export default InformationCard;
