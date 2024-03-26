import { QueryFunction } from '@tanstack/react-query';

import cleanTitle from '@/app/utils/cleanTitle';
import { ImageQueryType } from '@/app/models/Image';

export const getRecommendImage = async (label: string) => {
  // eslint-disable-next-line no-unused-vars
  try {
    const res = await fetch(
      `https://dapi.kakao.com/v2/search/image?query=${cleanTitle(
        label,
      )}&page=1&size=1`,
      {
        next: { tags: ['recommends', 'image', label] },
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

export const getImages: QueryFunction<
  ImageQueryType,
  [_1: string, _2: string, string]
> = async ({ queryKey }: { queryKey: [string, string, string] }) => {
  // eslint-disable-next-line no-unused-vars
  const [_1, _2, informationId] = queryKey;
  try {
    const res = await fetch(
      `https://dapi.kakao.com/v2/search/image?query=${cleanTitle(
        informationId,
      )}&page=1&size=5`,
      {
        next: { tags: ['information', 'image', informationId] },
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
