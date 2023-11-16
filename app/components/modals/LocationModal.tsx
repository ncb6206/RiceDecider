'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import Modal from './Modal';

import useLocationModal from '@/app/hooks/useLocationModal';
import { useAddress } from '@/app/hooks/useAddress';

const LocationModal = () => {
  const router = useRouter();
  const locationModal = useLocationModal();
  const { location, address, error } = useAddress();
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async () => {
    setIsLoading(true);

    console.log(
      location,
      address.results[0].region.area4.name ||
        address.results[0].region.area3.name,
      error,
    );

    router.push('/recommend/일산 소고기');

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
