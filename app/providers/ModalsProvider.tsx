'use client';

import LocationModal from '@/app/components/modals/LocationModal';
import LoginModal from '@/app/components/modals/LoginModal';

const ModalsProvider = () => {
  return (
    <>
      <LoginModal />
      <LocationModal />
    </>
  );
};

export default ModalsProvider;
