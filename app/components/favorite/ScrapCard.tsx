'use client';

// import { useState } from 'react';
import { FaLocationDot } from 'react-icons/fa6';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';

interface ScrapCardProps {
  title: string;
  category: string;
  address: string;
}

const ScrapCard = ({ title, category, address }: ScrapCardProps) => {
  // const [favorite, setFavorite] = useState(false);
  const favorite = false;

  return (
    <div className="flex flex-col gap-1 border-b border-gray-500 bg-white px-5 pb-2 pt-5">
      <div className="flex shrink grow basis-0 flex-row items-center justify-between">
        <div className="flex flex-col gap-1">
          <div className="self-stretch font-SBAggro text-base font-normal text-gray-900">
            {title}
          </div>
          <div className="shrink grow basis-0 text-sm font-medium text-red-500">
            {category}
          </div>
        </div>
        <div className="cursor-pointer">
          {!favorite && <AiOutlineHeart size={26} />}
          {favorite && <AiFillHeart size={26} className="text-rose-500" />}
        </div>
      </div>
      <div className="inline-flex items-end justify-start gap-3 self-stretch">
        <div className="flex h-11 items-center justify-start gap-4 py-2.5">
          <div className="flex items-center justify-center gap-2">
            <FaLocationDot size={20} className="text-rose-600" />
            <div className="text-sm font-normal text-gray-900">{address}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScrapCard;
