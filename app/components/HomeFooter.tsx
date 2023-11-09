'use client';

import NaverLoginButton from '@/app/components/button/NaverLoginButton';
import TextButton from '@/app/components/button/TextButton';

import { useRouter } from 'next/navigation';

const HomeFooter = () => {
  const router = useRouter();

  const goCategory = () => {
    router.push('/category');
  };

  return (
    <div className="mb-16 flex flex-col gap-y-4 px-6">
      <NaverLoginButton />
      <TextButton
        label="둘러보기"
        onClick={goCategory}
        className="mx-auto mt-2 text-xl font-medium text-white"
      />
    </div>
  );
};

export default HomeFooter;
