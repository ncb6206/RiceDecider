import cleanTitle from '@/app/utils/cleanTitle';

export const getRecommendImage = async (title: string) => {
  try {
    const res = await fetch(
      `/v2/search/image?query=${cleanTitle(title)}&page=1&size=1`,
      {
        next: { tags: ['recommends', 'image'] },
        headers: {
          Authorization:
            `KakaoAK ${process.env.NEXT_PUBLIC_KAKAO_ID}` as string,
        },
        cache: 'no-store',
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
      `/v2/search/image?query=${cleanTitle(title)}&page=1&size=5`,
      {
        next: { tags: ['information', 'image'] },
        headers: {
          Authorization:
            `KakaoAK ${process.env.NEXT_PUBLIC_KAKAO_ID}` as string,
        },
        cache: 'no-store',
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
