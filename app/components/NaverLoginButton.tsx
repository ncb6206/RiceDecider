'use client';

import { SiNaver } from 'react-icons/si';

import Button from '@/app/components/Button';

const NaverLoginButton = () => {
  const naverLogin = () => {
    console.log('네이버 로그인');
  };

  return (
    <Button
      label="네이버로 로그인"
      onClick={naverLogin}
      icon={SiNaver}
      outline={true}
      classNames="text-green-500 text-lg font-extrabold"
    />
  );
};

export default NaverLoginButton;
