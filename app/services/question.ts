import instance from './config/config';

export const getQuestionList = async (category: string) => {
  try {
    const response = await instance.get(`/api/questionList/${category}`);

    if (response.status === 200) {
      return response;
    }

    return null;
  } catch (error: any) {
    return error;
  }
};
