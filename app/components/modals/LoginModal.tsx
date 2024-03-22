'use client';

import Modal from './Modal';
import useModalStore from '@/app/store/modal';
import { useNaverLogin } from '@/app/hooks/useNaverLogin';

const LoginModal = () => {
  const naverLogin = useNaverLogin();
  const modalStore = useModalStore();

  return (
    <>
      <Modal
        isOpen={modalStore.isOpen}
        content={
          <p className="text-center text-base font-medium">
            로그인이 필요한 메뉴에요. <br /> 로그인하여 찜한 식당을
            확인하시겠습니까?
          </p>
        }
        leftLabel="취소"
        rightLabel="로그인"
        onClose={modalStore.onClose}
        onSubmit={naverLogin}
      />
    </>
  );
};

export default LoginModal;
