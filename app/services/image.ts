import cleanTitle from '@/app/utils/cleanTitle';

export const getRecommendImage = async (title: string) => {
  try {
    const res = await fetch(
      `https://dapi.kakao.com/v2/search/image?query=${cleanTitle(
        title,
      )}&page=1&size=1`,
      {
        method: 'GET',
        headers: {
          Authorization:
            `KakaoAK ${process.env.NEXT_PUBLIC_KAKAO_ID}` as string,
        },
      },
    );

    if (!res.ok) throw new Error('Failed to fetch data');

    const data = await res.json();
    // console.log(data);

    return data.documents;
  } catch (error) {
    return error;
  }
};

export const getImages = async (title: string) => {
  try {
    const res = await fetch(
      `https://dapi.kakao.com/v2/search/image?query=${cleanTitle(
        title,
      )}&page=1&size=5`,
      {
        method: 'GET',
        headers: {
          Authorization:
            `KakaoAK ${process.env.NEXT_PUBLIC_KAKAO_ID}` as string,
        },
      },
    );

    if (!res.ok) throw new Error('Failed to fetch data');

    const data = await res.json();
    // console.log(data);

    return data;
  } catch (error) {
    return error;
  }
};
