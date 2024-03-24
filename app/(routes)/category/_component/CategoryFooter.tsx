'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

import Button from '@/app/components/button/Button';
import TextButton from '@/app/components/button/TextButton';
import useCategoryStore, { CategoryDataType } from '@/app/store/category';
import useQuestionStore from '@/app/store/question';

const CategoryFooter = () => {
  const router = useRouter();
  const categoryStore = useCategoryStore();
  const questionStore = useQuestionStore();
  const [disabled, setDisabled] = useState(true);
  const [selectedList, setSelectedList] = useState<CategoryDataType[]>([]);

  useEffect(() => {
    const selectedList = categoryStore.categoryData.filter(
      item => item.select === true,
    );
    setSelectedList(selectedList);

    if (selectedList.length > 0) {
      return setDisabled(false);
    }

    setDisabled(true);
  }, [categoryStore.categoryData]);

  const onClick = async () => {
    questionStore.onCreateSelect();
    router.push(`/question/${selectedList[0].name}`);
    categoryStore.onResetSelected();
  };

  const onReset = () => {
    categoryStore.onResetSelected();
  };

  return (
    <div className="my-2 mb-10 flex w-full flex-col gap-5">
      <Button
        label="결정"
        disabled={disabled}
        onClick={onClick}
        outline={false}
        className="rounded-3xl"
      />
      <TextButton label="선택 초기화" onClick={onReset} className="mx-auto" />
    </div>
  );
};

export default CategoryFooter;
