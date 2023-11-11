import axios from 'axios';

export const getRecommend = async () => {
  try {
    const response = await axios.get(
      `https://openapi.naver.com/v1/search/local.json?query=일산 소고기&display=5&start=1&sort=comment`,
      {
        headers: {
          'X-Naver-Client-Id': process.env.NEXT_PUBLIC_NAVER_CLIENT_ID,
          'X-Naver-Client-Secret': process.env.NEXT_PUBLIC_NAVER_CLIENT_SECRET,
        },
      },
    );
    if (response.status === 200) return response;

    return null;
  } catch (error) {
    return error;
  }
};