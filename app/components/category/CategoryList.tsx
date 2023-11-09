'use client';

import All from '@/public/food/all.svg';
import American from '@/public/food/american.svg';
import Asian from '@/public/food/asian.svg';
import Beer from '@/public/food/beer.svg';
import Cafe from '@/public/food/cafe.svg';
import Chicken from '@/public/food/chicken.svg';
import Chinese from '@/public/food/chinese.svg';
import Hamburger from '@/public/food/hamburger.svg';
import Japanese from '@/public/food/japanese.svg';
import Korean from '@/public/food/korean.svg';
import Pizza from '@/public/food/pizza.svg';
import Snack from '@/public/food/snack.svg';
import CategoryCard from '@/app/components/category/CategoryCard';

const CategoryList = () => {
  return (
    <div className="my-3 w-full">
      <div className="h-[0px] border-2 border-black" />
      <div className="my-4 grid grid-cols-3">
        {Category &&
          Category.map((menu, index) => {
            return (
              <CategoryCard
                key={index}
                icon={menu.icon}
                label={menu.label}
                select={false}
              />
            );
          })}
      </div>
      <div className="h-[0px] border-2 border-black" />
    </div>
  );
};

export default CategoryList;

const Category = [
  { icon: All, label: '전체' },
  { icon: Korean, label: '한식' },
  { icon: Chinese, label: '중식' },
  { icon: Japanese, label: '일식' },
  { icon: American, label: '양식' },
  { icon: Beer, label: '패스트푸드' },
  { icon: Asian, label: '아시안' },
  { icon: Chicken, label: '치킨' },
  { icon: Pizza, label: '피자' },
  { icon: Snack, label: '분식' },
  { icon: Cafe, label: '카페/디저트' },
  { icon: Hamburger, label: '술집' },
];
