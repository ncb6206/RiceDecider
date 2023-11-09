'use client';

import { useCallback, useState } from 'react';
import Modal from './Modal';

import useLocationModal from '@/app/hooks/useLocationModal';

const LocationModal = () => {
  const locationModal = useLocationModal();
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = () => {};

  return (
    <>
      <Modal
        disabled={isLoading}
        isOpen={locationModal.isOpen}
        content={
          <p className="text-center text-base font-medium">
            &apos;네이버 지도&apos;에서 현재 위치 정보를 <br /> 사용하고자
            합니다.
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
