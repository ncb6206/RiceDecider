import Image from 'next/image';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { FaLocationDot } from 'react-icons/fa6';

import { ILocation } from '@/app/hooks/useGeoLocation';
import getDis from '@/app/utils/getDis';
import { Skeleton } from '@/app/components/ui/skeleton';

interface RecommendSwipeProps {
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

const RecommendSwipe = ({
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
}: RecommendSwipeProps) => {
  const blankImage =
    'https://img.freepik.com/premium-vector/default-image-icon-vector-missing-picture-page-for-website-design-or-mobile-app-no-photo-available_87543-11093.jpg';

  return (
    <div className="shadow-3xl flex flex-col gap-2 rounded-lg bg-white p-4">
      <div className="relative mb-2 mt-4 h-[22rem] w-[20rem] hover:cursor-pointer">
        {isImageLoading && !imageSrc && <Skeleton className="h-full w-full" />}
        {imageSrc && (
          <Image
            src={imageSrc || blankImage}
            alt="사진"
            fill
            sizes="300px"
            priority
            onClick={goInformation}
          />
        )}
      </div>
      <div className="flex justify-between gap-2">
        <p
          onClick={goInformation}
          className="cursor-pointer font-SBAggro text-3xl text-gray-900"
          dangerouslySetInnerHTML={{ __html: title }}
        />
        {isLogin && (
          <div>
            {!isScrap && (
              <AiOutlineHeart
                size={26}
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
      </div>
      <div className="flex gap-2 text-sm font-medium text-gray-900">
        {keywordList && <p>{keywordList}</p>}
      </div>
      <div className="flex gap-1">
        <div className="mt-1 flex">
          <FaLocationDot size={20} className="text-rose-600" />
        </div>
        <p className="font-bold text-gray-900">
          {getDis(location, {
            latitude: Number(latitude),
            longitude: Number(longitude),
          })}
          km
        </p>
      </div>
    </div>
  );
};

export default RecommendSwipe;
