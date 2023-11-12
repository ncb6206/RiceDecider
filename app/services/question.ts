import instance from './config';

export const getQuestionList = async (category: string) => {
  try {
    const response = await instance.get(`/api/questionList`);

    if (response.status === 200) {
      return response;
    }

    return null;
  } catch (error: any) {
    return error;
  }
};
