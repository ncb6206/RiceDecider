'use client';

import React, { SVGProps, useState } from 'react';

interface CategoryCardProps {
  icon: React.FC<SVGProps<SVGSVGElement>>;
  label: string;
  select: boolean;
}

const CategoryCard = ({ icon: Icon, label, select }: CategoryCardProps) => {
  const [selected, setSelected] = useState(select);

  const onClickSelect = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    setSelected(prev => !prev);
  };

  return (
    <div
      className={`m-2 inline-flex flex-col items-center justify-center gap-3 rounded-lg border px-2 py-5 hover:cursor-pointer hover:bg-red-400 ${
        selected ? 'bg-red-500' : 'bg-white'
      }`}
      onClick={onClickSelect}
    >
      <Icon
        className={`relative h-10 w-10 ${
          selected ? 'fill-white' : 'fill-black'
        }`}
      />
      <div
        className={`text-md text-center font-['Pretendard'] font-medium  ${
          selected ? 'text-white' : 'text-black'
        }`}
      >
        {label}
      </div>
    </div>
  );
};

export default CategoryCard;
