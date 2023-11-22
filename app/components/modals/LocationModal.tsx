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

  // const [isChecked, setIsChecked] = useState(false);

  // useEffect(() => {
  //   if (
  //     location &&
  //     (address?.results[0].region.area4.name ||
  //       address?.results[0].region.area3.name)
  //   ) {
  //     setIsChecked(true);
  //   }

  //   return setIsChecked(false);
  // }, [address?.results, location]);

  const onSubmit = async () => {
    console.log(useQuestion.keywordList);
    locationModal.onClose();

    getLocation();

    console.log(
      location,
      address?.results[0].region.area4.name ||
        address?.results[0].region.area3.name,
      error,
    );
    // console.log(isChecked);

    if (
      location &&
      (address?.results[0].region.area4.name ||
        address?.results[0].region.area3.name)
    ) {
      return router.push('/recommend/명륜진사갈비');
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
