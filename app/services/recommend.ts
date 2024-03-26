import { QueryFunction } from '@tanstack/react-query';

import { RestaurantType } from '@/app/models/Restaurant';

export const getRecommend: QueryFunction<
  RestaurantType,
  [_1: string, string]
> = async ({ queryKey }: { queryKey: [string, string] }) => {
  // eslint-disable-next-line no-unused-vars
  const [_1, recommendId] = queryKey;
  try {
    const res = await fetch(
      typeof window !== 'undefined'
        ? `/v1/search/local.json?query=${recommendId}&display=5&start=1&sort=random`
        : `https://openapi.naver.com/v1/search/local.json?query=${recommendId}&display=5&start=1&sort=random`,
      {
        next: { tags: ['recommends', recommendId] },
        headers: {
          'X-Naver-Client-Id': process.env
            .NEXT_PUBLIC_NAVER_CLIENT_ID as string,
          'X-Naver-Client-Secret': process.env
            .NEXT_PUBLIC_NAVER_CLIENT_SECRET as string,
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
