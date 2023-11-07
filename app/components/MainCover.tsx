import Logo from '@/public/logo.svg';

const MainCover = () => {
  return (
    <div className="absolute left-[12rem] top-[16rem] z-0 flex h-[25rem] w-[25rem] items-center rounded-full bg-lime-100">
      <div className="relative right-16 flex gap-2">
        <Logo fill="#FACACF" width="60" height="60" />
        <Logo fill="#D96E6E" width="60" height="60" />
        <Logo fill="#E14E4B" width="60" height="60" />
      </div>
    </div>
  );
};

export default MainCover;
