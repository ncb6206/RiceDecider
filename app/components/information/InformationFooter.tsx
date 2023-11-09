'use client';

import Button from '@/app/components/button/Button';

const InformationFooter = () => {
  const onClick = () => {};

  return (
    <div className="mb-8 mt-2 w-full px-3">
      <Button label="식당 보러가기" onClick={onClick} className="rounded-3xl" />
    </div>
  );
};

export default InformationFooter;
