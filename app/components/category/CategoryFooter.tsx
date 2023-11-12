'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

import Button from '@/app/components/button/Button';
import TextButton from '@/app/components/button/TextButton';
import useCategoryStore, {
  CategoryDataType,
} from '@/app/hooks/useCategoryStore';
import useQuestionStore from '@/app/hooks/useQuestionStore';

const CategoryFooter = () => {
  const router = useRouter();
  const CategoryStore = useCategoryStore();
  const QuestionStore = useQuestionStore();
  const [disabled, setDisabled] = useState(true);
  const [selectedList, setSelectedList] = useState<CategoryDataType[]>([]);

  useEffect(() => {
    const selectedList = CategoryStore.categoryData.filter(
      item => item.select === true,
    );
    setSelectedList(selectedList);

    if (selectedList.length > 0) {
      return setDisabled(false);
    }

    setDisabled(true);
  }, [CategoryStore.categoryData]);

  const onClick = () => {
    console.log(selectedList);
    QuestionStore.onCreateSelect();
    router.push('/question');
    CategoryStore.onResetSelected();
  };

  const onReset = () => {
    CategoryStore.onResetSelected();
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
