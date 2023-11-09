'use client';

import Title from '@/app/components/Title';

const RecommendTitle = () => {
  return (
    <div className="flex w-full p-6">
      <Title
        title="이 식당은 어떠신가요?"
        titleClassName="text-white"
        content="사진을 클릭하면 상세 정보를 확인할 수 있어요."
        contentClassName="text-white"
      />
    </div>
  );
};

export default RecommendTitle;
