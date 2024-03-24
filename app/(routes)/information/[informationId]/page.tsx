import { QueryClient } from '@tanstack/react-query';

import InformationClient from './InformationClient';
import { getInformation } from '@/app/services/information';
// import ErrorPage from '@/app/error';

const InformationPage = async ({
  params,
}: {
  params: { informationId: string };
}) => {
  const queryClient = new QueryClient();
  const [location, title] = decodeURI(params.informationId).split('%26');

  await queryClient.prefetchQuery({
    queryKey: ['information'],
    queryFn: () => getInformation(`${location} ${title}`, 'server'),
  });

  // if (infomation.items.length === 0) {
  //   return <ErrorPage />;
  // }

  return <InformationClient />;
};

export default InformationPage;
