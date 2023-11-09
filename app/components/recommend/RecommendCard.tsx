'use client';

import Image from 'next/image';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';

interface RecommnedCardProps {
  swipe: boolean;
  imageSrc: string;
  name: string;
  keywordList: Array<string>;
  distance: string;
}

const RecommendCard = ({
  swipe,
  imageSrc,
  name,
  keywordList,
  distance,
}: RecommnedCardProps) => {
  const favorite = false;

  return (
    <>
      {swipe && (
        <div className="flex flex-col gap-2 rounded-lg bg-white p-4 shadow-2xl">
          <Image
            src={imageSrc}
            alt="사진"
            width={320}
            height={352}
            className="mb-2 mt-4 h-[22rem] w-[20rem]"
          />
          <div className="flex justify-between">
            <p className="font-SBAggro text-3xl text-gray-900">{name}</p>
            <div className="cursor-pointer">
              {!favorite && <AiOutlineHeart size={26} />}
              {favorite && <AiFillHeart size={26} className="text-rose-500" />}
            </div>
          </div>
          <div className="flex gap-2 text-sm font-medium text-rose-500">
            {keywordList &&
              keywordList?.map((keyword, i) => {
                return <p key={i}>#{keyword}</p>;
              })}
          </div>

          <div className="font-bold">{distance}m</div>
        </div>
      )}

      {!swipe && (
        <div className="relative flex flex-col rounded-lg bg-white shadow-2xl">
          <Image
            src={imageSrc}
            alt="사진"
            width={320}
            height={352}
            className="h-[10rem] w-[12rem] rounded-t-lg"
          />
          <div className="absolute right-3 top-3 flex cursor-pointer">
            {!favorite && <AiOutlineHeart size={26} fill="white" />}
            {favorite && <AiFillHeart size={26} className="text-rose-500" />}
          </div>
          <div className="flex flex-col px-4 py-2">
            <p className="font-SBAggro text-lg text-gray-900">{name}</p>
            <p>{keywordList[0]}</p>
            <p className="font-medium text-rose-600">{distance}m</p>
          </div>
        </div>
      )}
    </>
  );
};

export default RecommendCard;
