import axios from 'axios';

export const getRecommend = async () => {
  try {
    const response = await axios.get(
      `/v1/search/image?query=임가네한우마을&display=5&start=5&sort=date`,
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
