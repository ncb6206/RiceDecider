import { ILocation } from '@/app/hooks/useGeoLocation';

export const getAddress = async ({ longitude, latitude }: ILocation) => {
  try {
    const res = await fetch(
      `/v2/gc?coords=${
        String(longitude) + ',' + String(latitude)
      }&output=json&orders=addr`,
      {
        method: 'GET',
        headers: {
          'X-NCP-APIGW-API-KEY-ID': process.env
            .NEXT_PUBLIC_NAVER_NCLOUD_ACCESS_KEY_ID as string,
          'X-NCP-APIGW-API-KEY': process.env
            .NEXT_PUBLIC_NAVER_NCLOUD_SECRET_KEY as string,
        },
        next: { revalidate: 600 },
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
