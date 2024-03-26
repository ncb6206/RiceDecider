'use client';

import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { AiFillHeart, AiOutlineHeart, AiOutlineLeft } from 'react-icons/ai';
import { useParams, useRouter } from 'next/navigation';
import { getCookie } from 'cookies-next';
import { useQuery } from '@tanstack/react-query';

import Header from '@/app/components/Header';
import { deleteScrap, postScrap } from '@/app/services/scrap';
import useTokenStore from '@/app/store/token';
import deleteToken from '@/app/utils/deleteToken';
import useScrapStore from '@/app/store/scrap';
import cleanTitle from '@/app/utils/cleanTitle';
import { getInformation } from '@/app/services/information';
import { RestaurantProps } from '@/app/models/Restaurant';
import clearWord from '@/app/utils/clearWord';
import parseInformationId from '@/app/utils/parseInformationId';

const InformationHeader = () => {
  const [isScrap, setIsScrap] = useState(false);
  const router = useRouter();
  const params = useParams();
  const token = getCookie('access_token');
  const { locationParam, titleParam, categoryParam } = parseInformationId(
    params.informationId as string,
  );

  const { isLogin } = useTokenStore();
  const { scrapAddressData } = useScrapStore();
  const { data: informationList } = useQuery({
    queryKey: ['information', `${locationParam} ${titleParam}`],
    queryFn: getInformation,
    staleTime: 120 * 1000,
    gcTime: 300 * 1000,
  });

  const informationData = informationList?.items?.find(
    (item: RestaurantProps) => clearWord(item.title) === clearWord(titleParam),
  );

  useEffect(() => {
    if (scrapAddressData.length !== 0) {
      if (scrapAddressData.includes(informationData?.address as string))
        return setIsScrap(true);
      setIsScrap(false);
    }
  }, [informationData?.address, scrapAddressData]);

  const goBack = () => {
    router.back();
  };

  const onScrap = async () => {
    const response = await postScrap({
      scrap: {
        category: categoryParam,
        realCategory: categoryParam,
        title: titleParam,
        ttwwfew: titleParam,
        detailURL: `https://map.naver.com/p/search/${cleanTitle(titleParam)}`,
        address: informationData?.address as string,
        radAddress: informationData?.roadAddress as string,
      },
      access_token: token as string,
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
      address: informationData?.address as string,
      access_token: token as string,
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
