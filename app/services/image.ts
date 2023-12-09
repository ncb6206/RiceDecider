export const getRecommendImage = async (title: string, server: boolean) => {
  const cleanTitle = title.replace(/<\/?[^>]+(>|$)/g, '');
  console.log(cleanTitle);

  try {
    const res = await fetch(
      server
        ? `https://openapi.naver.com/v1/search/image?query=${cleanTitle}&display=5&start=1&sort=sim`
        : `/v1/search/image?query=${cleanTitle}&display=5&start=1&sort=date`,
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

    return data.items;
  } catch (error) {
    return error;
  }
};

export const getImages = async (title: string, server: boolean) => {
  const cleanTitle = title.replace(/<\/?[^>]+(>|$)/g, '');
  console.log(cleanTitle);

  try {
    const res = await fetch(
      server
        ? `https://openapi.naver.com/v1/search/image?query=${cleanTitle}&display=5&start=1&sort=sim`
        : `/v1/search/image?query=${cleanTitle}&display=5&start=1&sort=date`,
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
