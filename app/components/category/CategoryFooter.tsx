'use client';

import { useState } from 'react';

import Button from '@/app/components/button/Button';
import TextButton from '@/app/components/button/TextButton';

const CategoryFooter = () => {
  const [disable, setDisable] = useState(true);

  const onClick = () => {};

  const onClickText = () => {};

  return (
    <div className="my-2 mb-10 flex w-full flex-col gap-5">
      <Button
        label="결정"
        disabled={disable}
        onClick={onClick}
        outline={false}
        className="rounded-3xl"
      />
      <TextButton
        label="선택 초기화"
        onClick={onClickText}
        className="mx-auto"
      />
    </div>
  );
};

export default CategoryFooter;
