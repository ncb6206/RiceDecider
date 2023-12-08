interface postScrapProps {
  scrap: {
    category: string;
    realCategory: string;
    title: string;
    ttwwfew: string;
    detailURL: string;
    address: string;
    radAddress: string;
  };
  access_token: string;
}

interface delteScrapProps {
  address: string;
  access_token: string;
}

export const getScrapList = async (access_token: string) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/scrapList`,
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
        cache: 'no-store',
      },
    );

    if (!res.ok) throw new Error('Failed to fetch data');

    const data = await res.json();
    console.log(data);

    return data;
  } catch (error) {
    return error;
  }
};

export const postScrap = async ({ scrap, access_token }: postScrapProps) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/scrap`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${access_token}`,
      },
      body: JSON.stringify({
        category: scrap.category,
        realCategory: scrap.realCategory,
        title: scrap.title,
        ttwwfew: scrap.ttwwfew,
        detailURL: scrap.detailURL,
        address: scrap.address,
        radAddress: scrap.radAddress,
      }),
    });

    if (!res.ok) throw new Error('Failed to fetch data');

    const data = await res.json();
    // console.log(data);

    return data;
  } catch (error) {
    return error;
  }
};

export const deleteScrap = async ({
  address,
  access_token,
}: delteScrapProps) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/scrap/${address}`,
      {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      },
    );

    if (!res.ok) throw new Error('Failed to fetch data');

    const data = await res.json();
    console.log(data);

    return data;
  } catch (error) {
    return error;
  }
};
