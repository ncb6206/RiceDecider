'use client';

import { MdError } from 'react-icons/md';

const Empty = () => {
  return (
    <div className="shadow-3xl flex flex-col items-center justify-center rounded-lg bg-white p-20">
      <MdError size={120} color="#E14E4B" />
      <p className="text-3xl font-bold">검색 결과가 없습니다!</p>
    </div>
  );
};

export default Empty;
