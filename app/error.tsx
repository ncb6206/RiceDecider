'use client';

import Logo from '@/public/logo.svg';

const ErrorPage = () => {
  return (
    <div className="flex flex-col gap-2">
      <Logo fill="#E14E4B" width="100" height="100" />
      에러가 발생하였습니다!
    </div>
  );
};

export default ErrorPage;
