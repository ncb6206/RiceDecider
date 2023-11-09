import QuestionFooter from '@/app/components/question/QuestionFooter';
import QuestionHeader from '@/app/components/question/QuestionHeader';
import QuestionList from '@/app/components/question/QuestionList';
import QuestionTitle from '@/app/components/question/QuestionTitle';

const QuestionPage = () => {
  return (
    <main className="mx-4 flex h-full flex-col items-center">
      <QuestionHeader />
      <QuestionTitle />
      <QuestionList />
      <div className="flex-1" />
      <QuestionFooter />
    </main>
  );
};

export default QuestionPage;
