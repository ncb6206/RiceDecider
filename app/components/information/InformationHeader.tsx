'use client';

import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { AiFillHeart, AiOutlineHeart, AiOutlineLeft } from 'react-icons/ai';
import { useParams, useRouter } from 'next/navigation';
import { getCookie } from 'cookies-next';

import Header from '@/app/components/Header';
import useRecommendStore from '@/app/hooks/useRecommend';
import { deleteScrap, postScrap } from '@/app/services/scrap';
import useTokenStore from '@/app/hooks/useToken';
import deleteToken from '@/app/utils/deleteToken';
import useScrapStore from '@/app/hooks/useScrap';

const InformationHeader = () => {
  const [isScrap, setIsScrap] = useState(false);
  const router = useRouter();
  const params = useParams();
  const token = getCookie('access_token');
  const [, title, categoryName] = decodeURI(String(params.informationId)).split(
    '%26',
  );

  const { isLogin } = useTokenStore();
  const useRecommend = useRecommendStore(state => state);
  const useScrap = useScrapStore(state => state);
  const { address, roadAddress } = useRecommend.information;

  useEffect(() => {
    if (useScrap.scrapAddressData.length !== 0) {
      if (useScrap.scrapAddressData.includes(address)) return setIsScrap(true);
      setIsScrap(false);
    }
  }, [address, useScrap.scrapAddressData]);

  const goBack = () => {
    router.back();
  };

  const onScrap = async () => {
    const response = await postScrap({
      scrap: {
        category: categoryName,
        realCategory: categoryName,
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

    if (response.length !== 0) {
      setIsScrap(true);
      toast('스크랩 되었습니다!');
      return;
    }

    return toast('스크랩 실패...');
  };

  const onDeleteScrap = async () => {
    const response = await deleteScrap({
      address,
      access_token: String(token),
    });

    if (response.length !== 0) {
      setIsScrap(false);
      toast('스크랩이 취소되었습니다!');
      return;
    }

    deleteToken();
    router.refresh();
    return toast('스크랩 취소실패...');
  };

  return (
    <div className="relative flex w-full flex-row items-center">
      <Header
        className="my-5 px-4"
        leftIcon={AiOutlineLeft}
        leftOnClick={goBack}
        label="식당 상세정보"
      />
      <div className="absolute right-4">
        {isLogin && (
          <>
            {!isScrap && (
              <AiOutlineHeart
                size={30}
                className="hover:cursor-pointer"
                onClick={onScrap}
              />
            )}
            {isScrap && (
              <AiFillHeart
                size={30}
                className="text-rose-500 hover:cursor-pointer"
                onClick={onDeleteScrap}
              />
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default InformationHeader;
