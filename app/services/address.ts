import axios from 'axios';

import { ILocation } from '@/app/hooks/useGeoLocation';

export const getAddress = async ({ longitude, latitude }: ILocation) => {
  try {
    const response = await axios.get(
      `/v2/gc?coords=${
        String(longitude) + ',' + String(latitude)
      }&output=json&orders=addr`,
      {
        headers: {
          'X-NCP-APIGW-API-KEY-ID':
            process.env.NEXT_PUBLIC_NAVER_NCLOUD_ACCESS_KEY_ID,
          'X-NCP-APIGW-API-KEY':
            process.env.NEXT_PUBLIC_NAVER_NCLOUD_SECRET_KEY,
        },
      },
    );
    if (response.status === 200) return response;

    return null;
  } catch (error) {
    return error;
  }
};
