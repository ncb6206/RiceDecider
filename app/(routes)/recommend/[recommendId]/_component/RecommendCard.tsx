'use client';

import Image from 'next/image';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { FaLocationDot } from 'react-icons/fa6';

import { ILocation } from '@/app/hooks/useGeoLocation';
import getDis from '@/app/utils/getDis';
import { Skeleton } from '@/app/components/ui/skeleton';

interface RecommnedCardProps {
  title: string;
  imageSrc?: string;
  isImageLoading: boolean;
  isLogin: boolean;
  isScrap: boolean;
  keywordList: string;
  location: ILocation;
  latitude?: string;
  longitude?: string;
  onScrap: () => void;
  goInformation: () => void;
  onDeleteScrap: () => void;
}

const RecommendCard = ({
  title,
  imageSrc,
  isImageLoading,
  isLogin,
  isScrap,
  keywordList,
  location,
  latitude,
  longitude,
  onScrap,
  goInformation,
  onDeleteScrap,
}: RecommnedCardProps) => {
  const blankImage =
    'https://img.freepik.com/premium-vector/default-image-icon-vector-missing-picture-page-for-website-design-or-mobile-app-no-photo-available_87543-11093.jpg';

  return (
    <div className="relative flex flex-col gap-2 rounded-lg bg-white shadow-md">
      <div className="relative h-[10rem] w-full rounded-t-lg hover:cursor-pointer">
        {isImageLoading && !imageSrc && <Skeleton className="h-full w-full" />}
        {imageSrc && (
          <Image
            src={imageSrc || blankImage}
            alt="사진"
            fill
            sizes="300px"
            onClick={goInformation}
          />
        )}
      </div>
      {isLogin && (
        <div className="absolute right-3 top-3 flex rounded-3xl bg-black bg-opacity-80 p-2 hover:cursor-pointer">
          {!isScrap && (
            <AiOutlineHeart
              size={26}
              fill="white"
              className="hover:cursor-pointer"
              onClick={onScrap}
            />
          )}
          {isScrap && (
            <AiFillHeart
              size={26}
              className="text-rose-500 hover:cursor-pointer"
              onClick={onDeleteScrap}
            />
          )}
        </div>
      )}
      <div className="flex flex-col px-4 py-2">
        <p
          className="cursor-pointer font-SBAggro text-lg text-gray-900"
          onClick={goInformation}
          dangerouslySetInnerHTML={{ __html: title }}
        />
        <p>{keywordList}</p>
        <div className="flex gap-1">
          <div className="mt-1 flex">
            <FaLocationDot size={20} className="text-rose-600" />
          </div>
          <p className="font-medium text-gray-900">
            {getDis(location, {
              latitude: Number(latitude),
              longitude: Number(longitude),
            })}
            km
          </p>
        </div>
      </div>
    </div>
  );
};

export default RecommendCard;
