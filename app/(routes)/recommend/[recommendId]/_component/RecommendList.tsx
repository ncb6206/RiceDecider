'use client';

import Slider from 'react-slick';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'next/navigation';

import '@/app/slick.css';
import SlickSetting from '@/app/components/slickSetting';
import useSwipeStore from '@/app/store/swipe';
import { imageZipProps, recommendProps } from '@/app/store/recommend';
import { useAddress } from '@/app/hooks/useAddress';
import useTokenStore from '@/app/store/token';
import RecommendCardSwipe from './RecommendCardSwipe';
import { getRecommend } from '@/app/services/recommend';
import { getRecommendImage } from '@/app/services/image';

const RecommendList = () => {
  const { isSwipe } = useSwipeStore();
  const { recommendId } = useParams();
  const { isLogin } = useTokenStore();
  const { location } = useAddress();
  const { data: recommendList } = useQuery({
    queryKey: ['recommends'],
    queryFn: () => getRecommend(decodeURI(recommendId as string), 'client'),
  });

  const { data: recommendImage } = useQuery<string[]>({
    queryKey: ['recommends', 'image'],
    queryFn: () => {
      const imageUrlArray = Promise.all(
        recommendList?.items?.map(async (item: recommendProps) => {
          const imageUrl: imageZipProps[] = await getRecommendImage(item.title);
          if (imageUrl?.length !== 0) {
            return imageUrl[0]?.image_url;
          }
        }),
      ).then(imageUrls => imageUrls);
      return imageUrlArray;
    },
  });

  return (
    <>
      <div className={`w-4/5`}>
        {isSwipe && (
          <Slider {...SlickSetting('recommend_dots')}>
            {recommendList?.items?.map(
              (recommend: recommendProps, i: number) => {
                return (
                  <RecommendCardSwipe
                    key={i}
                    swipe={isSwipe}
                    imageSrc={recommendImage && recommendImage[i]}
                    title={recommend.title}
                    keywordList={recommend.category}
                    address={recommend.address}
                    roadAddress={recommend.roadAddress}
                    latitude={recommend.mapy}
                    longitude={recommend.mapx}
                    location={location}
                    isLogin={isLogin}
                  />
                );
              },
            )}
          </Slider>
        )}
      </div>

      <div className="grid grid-cols-2 gap-2 px-2 py-4">
        {!isSwipe &&
          recommendList?.items?.map((recommend: recommendProps, i: number) => {
            return (
              <RecommendCardSwipe
                key={i}
                swipe={isSwipe}
                imageSrc={recommendImage && recommendImage[i]}
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
