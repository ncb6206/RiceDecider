import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from '@tanstack/react-query';

import RecommendClient from './RecommendClient';
import { getRecommend } from '@/app/services/recommend';

interface Props {
  params: { recommendId: string };
}

const RecommendPage = async ({ params }: Props) => {
  const queryClient = new QueryClient();
  const recommendId = decodeURI(params.recommendId);

  await queryClient.prefetchQuery({
    queryKey: ['recommends', recommendId],
    queryFn: getRecommend,
  });

  const dehydratedstate = dehydrate(queryClient);

  return (
    <HydrationBoundary state={dehydratedstate}>
      <RecommendClient />
    </HydrationBoundary>
  );
};

export default RecommendPage;
