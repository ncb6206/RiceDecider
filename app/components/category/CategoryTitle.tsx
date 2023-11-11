'use client';

const CategoryTitle = () => {
  return (
    <div className="flex flex-col items-center gap-1">
      <div className="relative mb-3 h-[29px] w-[168px]">
        <div className="absolute left-0 top-[13px] h-3.5 w-[168px] bg-pink-100" />
        <p className="absolute font-SBAggro text-2xl font-normal text-gray-900">
          카테고리 메뉴판
        </p>
      </div>
    </div>
  );
};

export default CategoryTitle;
