import { getRecommend } from '@/app/services/recommend';
import RecommendClient from './RecommendClient';
import ErrorPage from '@/app/error';

const RecommendPage = async ({
  params,
}: {
  params: { recommendId: string };
}) => {
  const recommends = await getRecommend(decodeURI(params.recommendId));

  if (recommends.items.length === 0) {
    return <ErrorPage />;
  }

  return <RecommendClient recommendList={recommends.items} />;
};

export default RecommendPage;
