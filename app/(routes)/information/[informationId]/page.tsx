import InformationClient from './InformationClient';

import { getImages } from '@/app/services/image';
import ErrorPage from '@/app/error';
import { recommendProps } from '@/app/store/recommend';
import clearWord from '@/app/utils/clearWord';
import { getInformation } from '@/app/services/information';

const InformationPage = async ({
  params,
}: {
  params: { informationId: string };
}) => {
  const [location, title] = decodeURI(params.informationId).split('%26');

  const infomation = await getInformation(`${location} ${title}`);
  const images = await getImages(`${title}`);

  if (infomation.items.length === 0) {
    return <ErrorPage />;
  }

  return (
    <InformationClient
      infomationList={
        infomation.items.filter(
          (item: recommendProps) => clearWord(item.title) === clearWord(title),
        )[0]
      }
      imageZip={images.documents}
    />
  );
};

export default InformationPage;
