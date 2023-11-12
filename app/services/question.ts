import instance from './config';

export const getQuestionList = async () => {
  try {
    const response = await instance.get(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/questionList`,
    );

    if (response.status === 200) {
      return response;
    }

    return null;
  } catch (error: any) {
    return error;
  }
};

export const getRelateQuestionList = async (keyword: string) => {
  try {
    const response = await instance.get(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/questionList/${keyword}`,
    );

    if (response.status === 200) {
      return response;
    }

    return null;
  } catch (error: any) {
    return error;
  }
};
