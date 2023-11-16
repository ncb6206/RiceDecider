import instance from './config/config';

export const getKeywordList = async () => {
  try {
    const response = await instance.get(`/api/keywordList`);

    if (response.status === 200) {
      return response;
    }

    return null;
  } catch (error: any) {
    return error;
  }
};
