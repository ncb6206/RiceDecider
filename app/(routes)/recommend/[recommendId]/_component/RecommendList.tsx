'use client';

import Slider from 'react-slick';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'next/navigation';

import '@/app/slick.css';
import SlickSetting from '@/app/components/slickSetting';
import useSwipeStore from '@/app/store/swipe';
import { useAddress } from '@/app/hooks/useAddress';
import useTokenStore from '@/app/store/token';
import RecommendCardSwipe from './RecommendCardSwipe';
import { getRecommend } from '@/app/services/recommend';
import { getRecommendImage } from '@/app/services/image';
import { ImageQueryType } from '@/app/models/Image';
import { RestaurantProps } from '@/app/models/Restaurant';

const RecommendList = () => {
  const { isSwipe } = useSwipeStore();
  const { recommendId } = useParams();
  const { isLogin } = useTokenStore();
  const { location } = useAddress();
  const { data: recommendList } = useQuery({
    queryKey: ['recommends', decodeURI(recommendId as string)],
    queryFn: getRecommend,
    staleTime: 120 * 1000,
    gcTime: 300 * 1000,
  });

  const getImageUrls = async () => {
    if (!recommendList?.items) {
      return [];
    }

    const imageUrlArray = recommendList.items.map(
      async (item: RestaurantProps) => {
        const imageUrl: ImageQueryType = await getRecommendImage(item.title);
        if (imageUrl?.documents.length !== 0) {
          return imageUrl?.documents[0]?.image_url;
        }
        return '';
      },
    );

    const imageUrls = await Promise.all(imageUrlArray);
    return imageUrls;
  };

  const { data: recommendImage, isLoading } = useQuery<string[]>({
    queryKey: ['recommends', 'images', decodeURI(recommendId as string)],
    queryFn: getImageUrls,
    staleTime: 120 * 1000,
    gcTime: 300 * 1000,
  });

  return (
    <>
      <div className={`w-4/5`}>
        {isSwipe && (
          <Slider {...SlickSetting('recommend_dots')}>
            {recommendList?.items?.map(
              (recommend: RestaurantProps, i: number) => {
                return (
                  <RecommendCardSwipe
                    key={i}
                    swipe={isSwipe}
                    imageSrc={recommendImage && recommendImage[i]}
                    isImageLoading={isLoading}
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
          recommendList?.items?.map((recommend: RestaurantProps, i: number) => {
            return (
              <RecommendCardSwipe
                key={i}
                swipe={isSwipe}
                imageSrc={recommendImage && recommendImage[i]}
                isImageLoading={isLoading}
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
