import { getRecommend } from '@/app/services/recommend';
import RecommendClient from './RecommendClient';

const RecommendPage = async ({
  params,
}: {
  params: { recommendId: string };
}) => {
  const recommends = await getRecommend(decodeURI(params.recommendId));

  return <RecommendClient recommendList={recommends.items} />;
};

export default RecommendPage;
