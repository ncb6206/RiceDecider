import { getQuestionList } from '@/app/services/question';
import QuestionClient from './QuestionClient';
import ErrorPage from '@/app/error';

const QuestionPage = async ({ params }: { params: { questionId: string } }) => {
  const questions = await getQuestionList(params.questionId);

  if (questions.length === 0) {
    return <ErrorPage />;
  }

  console.log('question페이지', questions);

  return (
    <QuestionClient questions={questions} questionId={params.questionId} />
  );
};

export default QuestionPage;
