export const getInformation = async (
  label: string,
  mode: 'server' | 'client',
) => {
  try {
    const res = await fetch(
      mode === 'server'
        ? `https://openapi.naver.com/v1/search/local.json?query=${label}&display=5&start=1&sort=random`
        : `/v1/search/local.json?query=${label}&display=5&start=1&sort=random`,
      {
        next: { tags: ['information'] },
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
