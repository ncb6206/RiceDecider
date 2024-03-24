import { create } from 'zustand';

import React from 'react';

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

export interface CategoryDataType {
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  label: string;
  name: string;
  select: boolean;
}

interface CategoryStore {
  categoryData: Array<CategoryDataType>;
  selectedCategory: Array<string>;
  onToggleSelect: (index: number) => void;
  onResetSelected: () => void;
}

const categoryData = [
  { icon: Korean, label: '한식', name: '한식', select: false },
  { icon: Chinese, label: '중식', name: '중식', select: false },
  { icon: Japanese, label: '일식', name: '일식', select: false },
  { icon: American, label: '양식', name: '양식', select: false },
  { icon: Beer, label: '패스트푸드', name: '패스트푸드', select: false },
  { icon: Asian, label: '아시안', name: '아시안', select: false },
  { icon: Chicken, label: '치킨', name: '치킨', select: false },
  { icon: Pizza, label: '피자', name: '피자', select: false },
  { icon: Snack, label: '분식', name: '분식', select: false },
  { icon: Cafe, label: '카페/디저트', name: '디저트', select: false },
  { icon: Hamburger, label: '술집', name: '술집', select: false },
];

const useCategoryStore = create<CategoryStore>(set => ({
  categoryData,
  selectedCategory: [],
  onToggleSelect: (index: number) =>
    set(state => {
      const newCategoryData = [...state.categoryData];
      newCategoryData[index].select = !newCategoryData[index].select;
      if (newCategoryData.filter(item => item.select === true).length > 1) {
        newCategoryData.map(item => (item.select = false));
        newCategoryData[index].select = !newCategoryData[index].select;
      }

      return { categoryData: newCategoryData };
    }),
  onResetSelected: () =>
    set(state => {
      const newCategoryData = [...state.categoryData];
      newCategoryData.map(item => (item.select = false));
      return { categoryData: newCategoryData };
    }),
}));

export default useCategoryStore;
