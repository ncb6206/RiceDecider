'use client';

import CategoryCard from '@/app/components/category/CategoryCard';
import useCategoryStore from '@/app/hooks/useCategoryStore';

const CategoryList = () => {
  const { categoryData } = useCategoryStore();

  return (
    <div className="my-3 w-full">
      <div className="h-[0px] border-2 border-black" />
      <div className="my-4 grid grid-cols-3">
        {categoryData &&
          categoryData?.map((menu, index) => {
            return (
              <CategoryCard
                key={index}
                id={index}
                icon={menu.icon}
                label={menu.label}
                select={menu.select}
              />
            );
          })}
      </div>
      <div className="h-[0px] border-2 border-black" />
    </div>
  );
};

export default CategoryList;
