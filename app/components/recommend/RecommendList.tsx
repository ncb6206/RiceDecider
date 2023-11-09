'use client';

import Slider from 'react-slick';

import RecommendCard from '@/app/components/recommend/RecommendCard';

const RecommendList = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
  };

  const swipe = true;

  return (
    <>
      <div className={`w-4/5`}>
        <Slider {...settings}>
          {swipe &&
            RecommendData &&
            RecommendData?.map((recommend, i) => {
              return (
                <RecommendCard
                  key={i}
                  swipe={swipe}
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
        {!swipe &&
          RecommendData &&
          RecommendData?.map((recommend, i) => {
            return (
              <RecommendCard
                key={i}
                swipe={swipe}
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
