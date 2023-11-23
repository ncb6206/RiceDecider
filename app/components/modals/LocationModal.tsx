'use client';

import { useRouter } from 'next/navigation';
// import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import Modal from './Modal';

import useLocationModal from '@/app/hooks/useLocationModal';
import { useAddress } from '@/app/hooks/useAddress';
import useQuestionStore from '@/app/hooks/useQuestionStore';

const LocationModal = () => {
  const router = useRouter();
  const locationModal = useLocationModal();
  const { location, address, getLocation, error } = useAddress();
  const useQuestion = useQuestionStore();
  const { keywordList, categoryName } = useQuestion;

  const onSubmit = async () => {
    locationModal.onClose();
    useQuestion.onResetkeywordList();

    const addressName =
      address?.results[0].region.area2.name.replace(/\s/g, '') +
      (address?.results[0].region.area4.name ||
        address?.results[0].region.area3.name);

    const keyword = keywordList[Math.floor(Math.random() * keywordList.length)];
    getLocation();

    console.log(location, addressName, error, keyword);

    if (location && addressName) {
      return router.push(
        `/recommend/${addressName} ${categoryName} ${keyword}`,
      );
    }

    return toast('브라우저 위치권한을 허용해주세요!');
  };

  return (
    <>
      <Modal
        isOpen={locationModal.isOpen}
        content={
          <p className="text-center text-base font-medium">
            주변 식당을 추천해드릴게요.
          </p>
        }
        leftLabel={'싫어요'}
        rightLabel={'좋아요'}
        onClose={locationModal.onClose}
        onSubmit={onSubmit}
      />
    </>
  );
};

export default LocationModal;
