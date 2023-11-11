'use client';

import { useState, useEffect } from 'react';
import Modal from './Modal';

import useLocationModal from '@/app/hooks/useLocationModal';
import { useAddress } from '@/app/hooks/useAddress';
import { getRecommend } from '@/app/services/recommend';

const LocationModal = () => {
  const locationModal = useLocationModal();
  const [isLoading, setIsLoading] = useState(false);
  const { location, address, error } = useAddress();

  const getMenu = async () => {
    const imsi = await getRecommend();

    console.log(imsi);
  };

  useEffect(() => {
    getMenu();
  }, []);

  const onSubmit = async () => {
    setIsLoading(true);

    const imsi = await getRecommend();
    console.log(location, address, error);
    console.log(imsi);
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
