import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from '@tanstack/react-query';

import RecommendClient from './RecommendClient';
import { getRecommend } from '@/app/services/recommend';

const RecommendPage = async ({
  params,
}: {
  params: { recommendId: string };
}) => {
  const queryClient = new QueryClient();
  const decodeId = decodeURI(params.recommendId);

  await queryClient.prefetchQuery({
    queryKey: ['recommends'],
    queryFn: () => getRecommend(decodeId, 'server'),
  });

  const dehydratedstate = dehydrate(queryClient);

  return (
    <HydrationBoundary state={dehydratedstate}>
      <RecommendClient />
    </HydrationBoundary>
  );
};

export default RecommendPage;
