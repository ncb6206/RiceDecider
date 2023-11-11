'use client';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './slick.css';

import RecommendCard from '@/app/components/recommend/RecommendCard';
import useSwipeStore from '@/app/hooks/useSwipeStore';

const RecommendList = () => {
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
  const useSwipe = useSwipeStore();

  return (
    <>
      <div className={`w-4/5`}>
        <Slider {...settings}>
          {useSwipe.isSwipe &&
            RecommendData &&
            RecommendData?.map((recommend, i) => {
              return (
                <RecommendCard
                  key={i}
                  swipe={useSwipe.isSwipe}
                  imageSrc={recommend.imageSrc}
                  name={recommend.name}
                  keywordList={recommend.keywordList}
                  distance={recommend.distance}
                />
              );
            })}
        </Slider>
      </div>

      <div className="grid grid-cols-2 gap-2">
        {!useSwipe.isSwipe &&
          RecommendData &&
          RecommendData?.map((recommend, i) => {
            return (
              <RecommendCard
                key={i}
                swipe={useSwipe.isSwipe}
                imageSrc={recommend.imageSrc}
                name={recommend.name}
                keywordList={recommend.keywordList}
                distance={recommend.distance}
              />
            );
          })}
      </div>
    </>
  );
};

export default RecommendList;

const RecommendData = [
  {
    imageSrc:
      'https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20231005_200%2F1696464055276npRVm_JPEG%2FKakaoTalk_20230602_184422712.jpg',
    name: '식당 이름',
    keywordList: ['키워드1', '키워드2', '키워드3'],
    distance: '1000',
  },
  {
    imageSrc:
      'https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20231005_200%2F1696464055276npRVm_JPEG%2FKakaoTalk_20230602_184422712.jpg',
    name: '식당 이름',
    keywordList: ['키워드1', '키워드2', '키워드3'],
    distance: '1000',
  },
  {
    imageSrc:
      'https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20231005_200%2F1696464055276npRVm_JPEG%2FKakaoTalk_20230602_184422712.jpg',
    name: '식당 이름',
    keywordList: ['키워드1', '키워드2', '키워드3'],
    distance: '1000',
  },
  {
    imageSrc:
      'https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20231005_200%2F1696464055276npRVm_JPEG%2FKakaoTalk_20230602_184422712.jpg',
    name: '식당 이름',
    keywordList: ['키워드1', '키워드2', '키워드3'],
    distance: '1000',
  },
];
