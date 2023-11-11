'use client';

import { useState } from 'react';
import Modal from './Modal';

import useLoginModal from '@/app/hooks/useLoginModal';

const LoginModal = () => {
  const loginModal = useLoginModal();
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = () => {
    setIsLoading(true);
    setIsLoading(false);
  };

  return (
    <>
      <Modal
        disabled={isLoading}
        isOpen={loginModal.isOpen}
        content={
          <p className="text-center text-base font-medium">
            로그인이 필요한 메뉴에요. <br /> 로그인하여 찜한 식당을
            확인하시겠습니까?
          </p>
        }
        leftLabel="취소"
        rightLabel="로그인"
        onClose={loginModal.onClose}
        onSubmit={onSubmit}
      />
    </>
  );
};

export default LoginModal;
