'use client';

import { getCookie, hasCookie } from 'cookies-next';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { FaLocationDot } from 'react-icons/fa6';

import { ILocation } from '@/app/hooks/useGeoLocation';
import { postScrap } from '@/app/services/scrap';
import getDis from '@/app/utils/getDis';
import toast from 'react-hot-toast';

interface RecommnedCardProps {
  swipe: boolean;
  imageSrc: string;
  title: string;
  keywordList: string;
  address: string;
  roadAddress: string;
  latitude: string;
  longitude: string;
  location: ILocation;
}

const RecommendCard = ({
  swipe,
  imageSrc,
  title,
  keywordList,
  address,
  roadAddress,
  latitude,
  longitude,
  location,
}: RecommnedCardProps) => {
  const router = useRouter();
  const token = getCookie('access_token');
  const param = usePathname();
  const favorite = false;

  const goInformation = () => {
    router.push(`/information/${title.replace(/<\/?[^>]+(>|$)/g, '')}`);
  };

  const onScrap = async () => {
    if (hasCookie('access_token')) {
      const response = await postScrap({
        scrap: {
          category: decodeURI(param.split('%20')[1]),
          realCategory: decodeURI(param.split('%20')[1]),
          title,
          ttwwfew: title,
          detailURL: `https://map.naver.com/p/search/${title.replace(
            /<\/?[^>]+(>|$)/g,
            '',
          )}`,
          address,
          radAddress: roadAddress,
        },
        access_token: String(token),
      });

      if (response.length !== 0) return toast('스크랩 되었습니다!');

      return toast('스크랩 실패...');
    }
  };

  return (
    <>
      {swipe && (
        <div className="shadow-3xl flex flex-col gap-2 rounded-lg bg-white p-4">
          {imageSrc && (
            <Image
              src={imageSrc}
              alt="사진"
              width={320}
              height={352}
              className="mb-2 mt-4 h-[22rem] w-[20rem]"
            />
          )}
          <div className="flex justify-between gap-2">
            <p
              onClick={goInformation}
              className="cursor-pointer font-SBAggro text-3xl text-gray-900"
              dangerouslySetInnerHTML={{ __html: title }}
            />
            <div>
              {!favorite && (
                <AiOutlineHeart
                  size={26}
                  className="cursor-pointer"
                  onClick={onScrap}
                />
              )}
              {favorite && (
                <AiFillHeart
                  size={26}
                  className="cursor-pointer text-rose-500"
                />
              )}
            </div>
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
      )}

      {!swipe && (
        <div className="relative flex flex-col gap-2 rounded-lg bg-white shadow-md">
          <Image
            src={imageSrc}
            alt="사진"
            width={320}
            height={352}
            className="h-[10rem] w-full rounded-t-lg"
          />
          <div className="absolute right-3 top-3 flex cursor-pointer">
            {!favorite && <AiOutlineHeart size={26} fill="white" />}
            {favorite && <AiFillHeart size={26} className="text-rose-500" />}
          </div>
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
      )}
    </>
  );
};

export default RecommendCard;
