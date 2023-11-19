import MainCover from '@/app/components/MainCover';
import HomeFooter from '@/app/components/HomeFooter';

const Home = () => {
  return (
    <main className="relative flex h-full flex-col overflow-auto bg-rose-500 text-white">
      <div className="ml-6 mt-[8rem] font-Pretendard text-xl font-medium">
        <p>밥은 정해져있어</p>
        <p>너는 고르기만 해</p>
        <p className="mt-5 font-SBAggro text-5xl tracking-widest">밥정너</p>
      </div>
      <div className="my-auto flex items-center justify-center">
        <MainCover />
      </div>
      <HomeFooter />
    </main>
  );
};

export default Home;
