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
  const recommends = await getRecommend(decodeURI(params.informationId));
  const images = await getImage(decodeURI(params.informationId), true);

  if (recommends.items.length === 0 || images.items.length === 0) {
    return <ErrorPage />;
  }

  return (
    <InformationClient
      recommendList={
        recommends.items.filter(
          (item: recommendProps) =>
            clearWord(item.title) ===
            clearWord(decodeURI(params.informationId)),
        )[0]
      }
      imageUrl={images.items[0].link}
    />
  );
};

export default InformationPage;
