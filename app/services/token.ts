interface getTokenProps {
  code: string;
  state: string;
}

const getToken = async ({ code, state }: getTokenProps) => {
  const NAVER_CALLBACK_URL = `${process.env.NEXT_PUBLIC_BASE_URL}/login/oauth2/code/naver`;

  try {
    const res = await fetch(
      `${NAVER_CALLBACK_URL}?code=${code}&state=${state}`,
      {
        method: 'GET',
        headers: {
          Accept: 'application/json',
        },
        cache: 'no-store',
      },
    );

    if (!res.ok) throw new Error('Failed to fetch data');

    const access_token = res.headers.get('Authorization');
    const refresh_token = res.headers.get('Authorization-refresh');

    console.log(access_token, refresh_token);

    if (access_token) localStorage.setItem('access_token', access_token);
    if (refresh_token) localStorage.setItem('refresh_token', refresh_token);

    return { access_token, refresh_token };
  } catch (error) {
    return error;
  }
};

export default getToken;
