import instance from './config';

export const getAnswerList = async () => {
  try {
    const response = await instance.get(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/answerList`,
    );

    if (response.status === 200) {
      return response;
    }

    return null;
  } catch (error: any) {
    return error;
  }
};

export const getAnswer = async (index: number) => {
  try {
    const response = await instance.get(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/answer/question/${index}`,
    );

    if (response.status === 200) {
      return response;
    }

    return null;
  } catch (error: any) {
    return error;
  }
};
