import instance from './config';

export const getKeywordList = async () => {
  try {
    const response = await instance.get(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/keywordList`,
    );

    if (response.status === 200) {
      return response;
    }

    return null;
  } catch (error: any) {
    return error;
  }
};
