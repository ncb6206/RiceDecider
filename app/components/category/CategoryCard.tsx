'use client';

import useCategoryStore from '@/app/hooks/useCategoryStore';
import React, { SVGProps } from 'react';

interface CategoryCardProps {
  id: number;
  icon: React.FC<SVGProps<SVGSVGElement>>;
  label: string;
  select: boolean;
}

const CategoryCard = ({ id, icon: Icon, label, select }: CategoryCardProps) => {
  const CategoryStore = useCategoryStore();

  const onClickSelect = () => {
    CategoryStore.onToggleSelect(id);
  };

  return (
    <div
      className={`m-2 inline-flex flex-col items-center justify-center gap-3 rounded-lg border px-2 py-5 md:hover:cursor-pointer md:hover:bg-red-400 ${
        select ? 'bg-red-500' : 'bg-white'
      }`}
      onClick={onClickSelect}
    >
      <Icon
        className={`relative h-10 w-10 ${select ? 'fill-white' : 'fill-black'}`}
      />
      <div
        className={`text-md text-center font-['Pretendard'] font-medium  ${
          select ? 'text-white' : 'text-black'
        }`}
      >
        {label}
      </div>
    </div>
  );
};

export default CategoryCard;
