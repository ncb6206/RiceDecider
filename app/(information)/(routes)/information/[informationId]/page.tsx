import InformationClient from './InformationClient';

import { getRecommend } from '@/app/services/recommend';
import { getImage } from '@/app/services/image';
import ErrorPage from '@/app/error';
import { recommendProps } from '@/app/hooks/useRecommend';
import clearWord from '@/app/utils/clearWord';

const InformationPage = async ({
  params,
}: {
  params: { informationId: string };
}) => {
  const title = decodeURI(params.informationId).split('%26')[0];
  const recommends = await getRecommend(title);
  const images = await getImage(title, true);

  if (recommends.items.length === 0 || images.items.length === 0) {
    return <ErrorPage />;
  }

  return (
    <InformationClient
      recommendList={
        recommends.items.filter(
          (item: recommendProps) => clearWord(item.title) === clearWord(title),
        )[0]
      }
      imageUrl={images.items[0].link}
    />
  );
};

export default InformationPage;
