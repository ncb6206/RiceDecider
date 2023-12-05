import instance from './config/config';

interface getTokenProps {
  code: string;
  state: string;
}

const getToken = async ({ code, state }: getTokenProps) => {
  try {
    const res = await instance.get(
      `/login/oauth2/code/naver?code=${code}&state=${state}`,
    );

    if (res.status !== 200) throw new Error('Failed to fetch data');

    const access_token = res.headers.Authorization;
    const refresh_token = res.headers['Authorization-refresh'];

    console.log(access_token, refresh_token);

    if (access_token) {
      console.log('access_token 저장', access_token);
      localStorage.setItem('access_token', access_token);
    }

    if (refresh_token) {
      console.log('refresh_token 저장', refresh_token);
      localStorage.setItem('refresh_token', refresh_token);
    }

    return { access_token, refresh_token };
  } catch (error) {
    return error;
  }
};

export default getToken;
