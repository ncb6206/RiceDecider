'use client';

// import { useState } from 'react';
import { FaLocationDot } from 'react-icons/fa6';
import { AiFillHeart } from 'react-icons/ai';
import { deleteScrap } from '@/app/services/scrap';
import { getCookie } from 'cookies-next';
import toast from 'react-hot-toast';
import { useState } from 'react';

interface ScrapCardProps {
  title: string;
  category: string;
  address: string;
}

const ScrapCard = ({ title, category, address }: ScrapCardProps) => {
  const [isDeleted, setIsDeleted] = useState(false);
  const token = getCookie('access_token');

  const onDeleteScrap = async () => {
    const response = await deleteScrap({
      address,
      access_token: String(token),
    });

    if (response.length !== 0) {
      toast('스크랩이 삭제되었습니다!');
      setIsDeleted(true);
      return;
    }

    return toast('스크랩 삭제실패...');
  };

  if (isDeleted) return null;

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
        <div className="hover:scale-110 hover:cursor-pointer">
          <AiFillHeart
            size={26}
            className="text-rose-500"
            onClick={onDeleteScrap}
          />
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
