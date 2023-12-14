import MainCover from '@/app/components/MainCover';
import HomeFooter from '@/app/components/HomeFooter';
import { hasCookie } from 'cookies-next';
import { cookies } from 'next/headers';

const Home = () => {
  const hasToken = hasCookie('access_token', { cookies });

  return (
    <main className="relative flex h-full flex-col overflow-y-auto overflow-x-hidden bg-rose-500 text-white">
      <div className="ml-6 mt-[8rem] font-Pretendard text-xl font-medium">
        <p>밥은 정해져있어</p>
        <p>너는 고르기만 해</p>
        <p className="mt-5 font-SBAggro text-5xl tracking-widest">밥정너</p>
      </div>
      <div className="my-auto flex items-center justify-center">
        <MainCover />
      </div>
      <HomeFooter hasToken={hasToken} />
    </main>
  );
};

export default Home;
