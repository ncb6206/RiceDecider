export const getRecommend = async (label: string) => {
  try {
    const res = await fetch(
      `https://openapi.naver.com/v1/search/local.json?query=${label}&display=5&start=1&sort=random`,
      {
        method: 'GET',
        headers: {
          'X-Naver-Client-Id': process.env
            .NEXT_PUBLIC_NAVER_CLIENT_ID as string,
          'X-Naver-Client-Secret': process.env
            .NEXT_PUBLIC_NAVER_CLIENT_SECRET as string,
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
