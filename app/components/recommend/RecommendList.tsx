'use client';

import Slider from 'react-slick';

import '@/app/slick.css';
import SlickSetting from '@/app/components/slickSetting';
import useSwipeStore from '@/app/store/swipe';
import useRecommendStore from '@/app/store/recommend';
import { useAddress } from '@/app/hooks/useAddress';
import useTokenStore from '@/app/store/token';
import RecommendCardSwipe from './RecommendCardSwipe';

const RecommendList = () => {
  const { isSwipe } = useSwipeStore();
  const { recommendData, recommendImage } = useRecommendStore();
  const { isLogin } = useTokenStore();
  const { location } = useAddress();

  return (
    <>
      <div className={`w-4/5`}>
        {isSwipe && (
          <Slider {...SlickSetting('recommend_dots')}>
            {recommendData?.map((recommend, i) => {
              return (
                <RecommendCardSwipe
                  key={i}
                  swipe={isSwipe}
                  imageSrc={recommendImage[i]}
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
        {!isSwipe &&
          recommendData?.map((recommend, i) => {
            return (
              <RecommendCardSwipe
                key={i}
                swipe={isSwipe}
                imageSrc={recommendImage[i]}
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
