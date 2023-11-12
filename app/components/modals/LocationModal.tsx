'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import Modal from './Modal';

import useLocationModal from '@/app/hooks/useLocationModal';
import { useAddress } from '@/app/hooks/useAddress';
import { getRecommend } from '@/app/services/recommend';
import useRecommendStore, { recommendProps } from '@/app/hooks/useRecommend';
import { getImage } from '@/app/services/image';

const LocationModal = () => {
  const router = useRouter();
  const locationModal = useLocationModal();
  const { location, address, error } = useAddress();
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async () => {
    setIsLoading(true);

    console.log(location, address.data.results[0].region, error);
    const response: any = await getRecommend();

    if (response.status === 200) {
      useRecommendStore.setState({
        recommendData: response.data.items.slice(0, 4),
      });

      Promise.all(
        response.data.items.slice(0, 4).map(async (item: recommendProps) => {
          const imageUrl: any = await getImage(item.title);
          if (imageUrl.status === 200) {
            return imageUrl.data.items[0].link;
          }
          return 'https://source.unsplash.com/random/?cat';
        }),
      ).then(imageUrls => {
        useRecommendStore.setState({
          recommendImage: imageUrls,
        });
      });

      router.push('/recommend');
    }
    locationModal.onClose();
    setIsLoading(false);
  };

  return (
    <>
      <Modal
        disabled={isLoading}
        isOpen={locationModal.isOpen}
        content={
          <p className="text-center text-base font-medium">
            주변 식당을 추천해드릴게요. <br /> 위치 정보를 사용하도록
            허용하시겠습니까?
          </p>
        }
        leftLabel="차단"
        rightLabel="허용"
        onClose={locationModal.onClose}
        onSubmit={onSubmit}
      />
    </>
  );
};

export default LocationModal;
