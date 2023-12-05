'use client';

import { SiNaver } from 'react-icons/si';
import { useRouter } from 'next/navigation';

const NaverLoginButton = () => {
  const router = useRouter();
  const session = false;
  const NAVER_CLIENT_ID = process.env.NEXT_PUBLIC_NAVER_CLIENT_ID;
  const NAVER_CALLBACK_URL = `${process.env.NEXT_PUBLIC_FRONT_URL}/oauth/callback/naver`;

  // const initializeNaverLogin = () => {
  //   const naverLogin = new naver.LoginWithNaverId({
  //     clientId: NAVER_CLIENT_ID,
  //     callbackUrl: NAVER_CALLBACK_URL,
  //     isPopup: true,
  //     loginButton: { color: 'green', type: 3, height: '48' },
  //   });
  //   naverLogin.init();
  //   naverLogin.logout();
  // };

  // const initNaverLogin = () => {
  //   const naverLogin = new window.naver.LoginWithNaverId({
  //     clientId: NAVER_CLIENT_ID,
  //     callbackUrl:
  //       'http://localhost:3000/oauth/callback/naver' || NAVER_CALLBACK_URL,
  //     isPopup: false,
  //     loginButton: { color: 'green', type: 3, height: '48' },
  //   });
  //   console.log(naverLogin);
  //   naverLogin.init();
  // };

  // const getData = () => {
  //   if (window.location.href.includes('access_token')) {
  //     console.log('We got AccessToken');
  //   }
  // };

  // useEffect(() => {
  //   initNaverLogin();
  //   getData();
  // }, []);

  const naverLogin = () => {
    // const naverLoginButton = document.getElementById(
    //   'naverIdLogin_loginButton',
    // );
    // if (naverLoginButton) naverLoginButton.click();
    router.push(
      `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${NAVER_CLIENT_ID}&state=test&redirect_uri=${NAVER_CALLBACK_URL}`,
    );
  };

  const logOut = () => {};

  return (
    <>
      {session && (
        <button
          className="relative flex h-14 w-full select-none items-center justify-center gap-3 rounded-lg bg-green-500 text-lg font-extrabold text-white transition hover:bg-green-600 disabled:cursor-not-allowed disabled:opacity-70"
          onClick={logOut}
        >
          로그아웃
        </button>
      )}
      {!session && (
        <>
          <button
            className="relative flex h-14 w-full select-none items-center justify-center gap-3 rounded-lg bg-green-500 text-lg font-extrabold text-white transition hover:bg-green-600 disabled:cursor-not-allowed disabled:opacity-70"
            onClick={naverLogin}
          >
            <SiNaver size={24} />
            네이버로 계속하기
          </button>
          <button id="naverIdLogin" className="hidden" />
        </>
      )}
    </>
  );
};

export default NaverLoginButton;
