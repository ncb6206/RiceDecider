'use client';

import Slider from 'react-slick';

import '@/app/slick.css';
import SlickSetting from '@/app/components/slickSetting';
import useSwipeStore from '@/app/hooks/useSwipeStore';
import useRecommendStore from '@/app/hooks/useRecommend';
import { useAddress } from '@/app/hooks/useAddress';
import useTokenStore from '@/app/hooks/useToken';
import RecommendCardSwipe from './RecommendCardSwipe';

const RecommendList = () => {
  const useSwipe = useSwipeStore();
  const useRecommend = useRecommendStore(state => state);
  const { isLogin } = useTokenStore();
  const { location } = useAddress();

  return (
    <>
      <div className={`w-4/5`}>
        {useSwipe.isSwipe && (
          <Slider {...SlickSetting('recommend_dots')}>
            {useRecommend.recommendData?.map((recommend, i) => {
              return (
                <RecommendCardSwipe
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
        )}
      </div>

      <div className="grid grid-cols-2 gap-2 px-2 py-4">
        {!useSwipe.isSwipe &&
          useRecommend.recommendData?.map((recommend, i) => {
            return (
              <RecommendCardSwipe
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
