'use client';

import { AiOutlineHeart } from 'react-icons/ai';

import Header from '@/app/components/Header';

const CategoryHeader = () => {
  return <Header rightIcon={AiOutlineHeart} className="py-5" />;
};

export default CategoryHeader;
