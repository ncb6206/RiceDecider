'use client';

import Slider from 'react-slick';

import '@/app/slick.css';
import RecommendCard from '@/app/components/recommend/RecommendCard';
import SlickSetting from '@/app/components/slickSetting';
import useSwipeStore from '@/app/hooks/useSwipeStore';
import useRecommendStore from '@/app/hooks/useRecommend';
import { useAddress } from '@/app/hooks/useAddress';
import { isToken } from '@/app/utils/isToken';

const RecommendList = () => {
  const useSwipe = useSwipeStore();
  const { location } = useAddress();
  const isLogin = isToken();
  const useRecommend = useRecommendStore(state => state);

  return (
    <>
      <div className={`w-4/5`}>
        <Slider {...SlickSetting('recommend_dots')}>
          {useSwipe.isSwipe &&
            useRecommend.recommendData?.map((recommend, i) => {
              return (
                <RecommendCard
                  key={i}
                  swipe={useSwipe.isSwipe}
                  imageSrc={useRecommend.recommendImage[i]}
                  title={recommend.title}
                  keywordList={recommend.category}
                  address={recommend.address}
                  roadAddress={recommend.roadAddress}
                  latitude={recommend.mapy || ''}
                  longitude={recommend.mapx || ''}
                  location={location}
                  isLogin={isLogin}
                />
              );
            })}
        </Slider>
      </div>

      <div className="grid grid-cols-2 gap-2 px-2 py-4">
        {!useSwipe.isSwipe &&
          useRecommend.recommendData?.map((recommend, i) => {
            return (
              <RecommendCard
                key={i}
                swipe={useSwipe.isSwipe}
                imageSrc={useRecommend.recommendImage[i]}
                title={recommend.title}
                keywordList={recommend.category}
                address={recommend.address}
                roadAddress={recommend.roadAddress}
                latitude={recommend.mapy || ''}
                longitude={recommend.mapx || ''}
                location={location}
                isLogin={isLogin}
              />
            );
          })}
      </div>
    </>
  );
};

export default RecommendList;
