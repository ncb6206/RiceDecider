export const getImage = async (title: string, server: boolean) => {
  try {
    const res = await fetch(
      server
        ? `/v1/search/image?query=${title.replace(
            /<\/?[^>]+(>|$)/g,
            '',
          )}&display=5&start=1&sort=date`
        : `/v1/search/image?query=${title.replace(
            /<\/?[^>]+(>|$)/g,
            '',
          )}&display=5&start=1&sort=date`,
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
