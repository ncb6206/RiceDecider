'use client';

import { useRouter } from 'next/navigation';
// import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import Modal from './Modal';

import { useAddress } from '@/app/hooks/useAddress';
import useQuestionStore from '@/app/store/question';
import useLocationModalStore from '@/app/store/locationModal';

const LocationModal = () => {
  const router = useRouter();
  const locationModalStore = useLocationModalStore();
  const { location, address, getLocation } = useAddress();
  const questionStore = useQuestionStore();
  const { keywordList, categoryName } = questionStore;

  const onSubmit = async () => {
    locationModalStore.onClose();
    questionStore.onResetkeywordList();

    const addressName =
      address?.results[0].region.area2.name.replace(/\s/g, '') +
      (address?.results[0].region.area4.name ||
        address?.results[0].region.area3.name);

    const keyword = keywordList[Math.floor(Math.random() * keywordList.length)];
    getLocation();

    // console.log(location, addressName, error, keyword);

    if (location && addressName) {
      if (categoryName === '아시안') {
        if (keyword !== undefined) {
          return router.push(
            `/recommend/${addressName} ${categoryName} 음식 ${keyword}`,
          );
        }

        return router.push(`/recommend/${addressName} ${categoryName} 음식`);
      }

      if (keyword !== undefined) {
        return router.push(
          `/recommend/${addressName} ${categoryName} ${keyword}`,
        );
      }

      return router.push(`/recommend/${addressName} ${categoryName}`);
    }

    return toast('브라우저 위치권한을 허용해주세요!');
  };

  return (
    <>
      <Modal
        isOpen={locationModalStore.isOpen}
        content={
          <p className="text-center text-base font-medium">
            주변 식당을 추천해드릴게요.
          </p>
        }
        leftLabel={'싫어요'}
        rightLabel={'좋아요'}
        onClose={locationModalStore.onClose}
        onSubmit={onSubmit}
      />
    </>
  );
};

export default LocationModal;
