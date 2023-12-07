import { cookies } from 'next/headers';
import { getCookie, hasCookie } from 'cookies-next';

import ErrorPage from '@/app/error';
import { getScrapList } from '@/app/services/scrap';
import ScrapClient from './ScrapClient';

const ScrapPage = async () => {
  const hasToken = hasCookie('access_token', { cookies });
  const access_token = getCookie('access_token', { cookies });

  const scrapList = await getScrapList(String(access_token));
  console.log(scrapList);

  if (!hasToken) return <ErrorPage />;

  return <ScrapClient scrapList={scrapList} />;
};

export default ScrapPage;
