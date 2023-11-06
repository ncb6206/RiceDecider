import NaverLoginButton from '@/app/components/NaverLoginButton';

export default function Home() {
  return (
    <main className="flex h-full flex-col text-white">
      <div className="mx-auto mt-4">밥정너</div>
      <div className="flex-1"></div>
      <div className="p-2 ">
        <NaverLoginButton />
      </div>
    </main>
  );
}
