'use client';

import Modal from './Modal';
import { useNaverLogin } from '@/app/hooks/useNaverLogin';
import useLoginModalStore from '@/app/store/loginModal';

const LoginModal = () => {
  const naverLogin = useNaverLogin();
  const loginModalStore = useLoginModalStore();

  return (
    <>
      <Modal
        isOpen={loginModalStore.isOpen}
        content={
          <p className="text-center text-base font-medium">
            로그인이 필요한 메뉴에요. <br /> 로그인하여 찜한 식당을
            확인하시겠습니까?
          </p>
        }
        leftLabel="취소"
        rightLabel="로그인"
        onClose={loginModalStore.onClose}
        onSubmit={naverLogin}
      />
    </>
  );
};

export default LoginModal;
