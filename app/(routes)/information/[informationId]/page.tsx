import { QueryClient } from '@tanstack/react-query';

import InformationClient from './InformationClient';
import { getInformation } from '@/app/services/information';
import parseInformationId from '@/app/utils/parseInformationId';
// import ErrorPage from '@/app/error';

const InformationPage = async ({
  params,
}: {
  params: { informationId: string };
}) => {
  const queryClient = new QueryClient();
  const { locationParam: location, titleParam: title } = parseInformationId(
    params.informationId,
  );

  await queryClient.prefetchQuery({
    queryKey: ['information', `${location} ${title}`],
    queryFn: getInformation,
  });

  // if (infomation.items.length === 0) {
  //   return <ErrorPage />;
  // }

  return <InformationClient />;
};

export default InformationPage;
