'use client';

import useRecommendStore from '@/app/hooks/useRecommend';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';

interface RecommnedCardProps {
  swipe: boolean;
  imageSrc: string;
  title: string;
  keywordList: string;
  address: string;
  roadAddress: string;
}

const RecommendCard = ({
  swipe,
  imageSrc,
  title,
  keywordList,
  address,
  roadAddress,
}: RecommnedCardProps) => {
  const router = useRouter();
  const favorite = false;

  const goInformation = () => {
    // useRecommendStore.setState({
    //   recommend: {
    //     title,
    //     category: keywordList,
    //     address,
    //     roadAddress,
    //     imageSrc,
    //   },
    // });
    router.push(`/information/${title.replace(/<\/?[^>]+(>|$)/g, '')}`);
  };

  return (
    <>
      {swipe && (
        <div className="shadow-3xl flex flex-col gap-2 rounded-lg bg-white p-4">
          <Image
            src={imageSrc}
            alt="사진"
            width={320}
            height={352}
            className="mb-2 mt-4 h-[22rem] w-[20rem]"
          />
          <div className="flex justify-between">
            <p
              onClick={goInformation}
              className="cursor-pointer font-SBAggro text-3xl text-gray-900"
              dangerouslySetInnerHTML={{ __html: title }}
            />
            <div className="cursor-pointer">
              {!favorite && <AiOutlineHeart size={26} />}
              {favorite && <AiFillHeart size={26} className="text-rose-500" />}
            </div>
          </div>
          <div className="flex gap-2 text-sm font-medium text-rose-500">
            {keywordList && <p># {keywordList}</p>}
          </div>

          <div className="font-bold">{roadAddress}</div>
        </div>
      )}

      {!swipe && (
        <div className="relative flex flex-col rounded-lg bg-white shadow-md">
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
            <p># {keywordList}</p>
            <p className="font-medium text-rose-600">{roadAddress}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default RecommendCard;
