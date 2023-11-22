'use client';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './slick.css';

import RecommendCard from '@/app/components/recommend/RecommendCard';
import useSwipeStore from '@/app/hooks/useSwipeStore';
import useRecommendStore from '@/app/hooks/useRecommend';
import { useAddress } from '@/app/hooks/useAddress';

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  appendDots: (dots: any) => (
    <div
      style={{
        width: '100%',
        marginTop: '1rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <ul> {dots} </ul>
    </div>
  ),
  dotsClass: 'dots_custom',
};

const RecommendList = () => {
  const useSwipe = useSwipeStore();
  const { location } = useAddress();
  const useRecommend = useRecommendStore(state => state);

  return (
    <>
      <div className={`w-4/5`}>
        <Slider {...settings}>
          {useSwipe.isSwipe &&
            useRecommend.recommendData &&
            useRecommend.recommendData.map((recommend, i) => {
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
                />
              );
            })}
        </Slider>
      </div>

      <div className="grid grid-cols-2 gap-2 px-2 py-4">
        {!useSwipe.isSwipe &&
          useRecommend.recommendData &&
          useRecommend.recommendData.map((recommend, i) => {
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
              />
            );
          })}
      </div>
    </>
  );
};

export default RecommendList;
