import { useRouter } from 'next/navigation';

export const useNaverLogin = () => {
  const router = useRouter();

  const NAVER_CLIENT_ID = process.env.NEXT_PUBLIC_NAVER_CLIENT_ID;
  const NAVER_CALLBACK_URL = `${process.env.NEXT_PUBLIC_FRONT_URL}/oauth/callback/naver`;

  return () =>
    router.push(
      `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${NAVER_CLIENT_ID}&state=test&redirect_uri=${NAVER_CALLBACK_URL}`,
    );
};
