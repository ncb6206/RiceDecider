'use client';

import { AiOutlineHeart, AiOutlineLeft } from 'react-icons/ai';
import { useParams, useRouter } from 'next/navigation';

import Header from '@/app/components/Header';
import { isToken } from '@/app/utils/isToken';
import useRecommendStore from '@/app/hooks/useRecommend';
import toast from 'react-hot-toast';
import { postScrap } from '@/app/services/scrap';
import { getCookie } from 'cookies-next';

const InformationHeader = () => {
  const router = useRouter();
  const params = useParams();

  const token = getCookie('access_token');
  const isLogin = isToken();

  const useRecommend = useRecommendStore(state => state);
  const [title, categoryName] = decodeURI(String(params.informationId)).split(
    '%26',
  );
  const { address, roadAddress } = useRecommend.information;

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

    if (response.length !== 0) return toast('스크랩 되었습니다!');

    return toast('스크랩 실패...');
  };

  return (
    <Header
      className="my-5 px-4"
      leftIcon={AiOutlineLeft}
      leftOnClick={goBack}
      label="식당 상세정보"
      rightIcon={isLogin && AiOutlineHeart}
      rightOnClick={onScrap}
    />
  );
};

export default InformationHeader;
