import { hasCookie } from 'cookies-next';

export const isToken = () => {
  const hasToken = hasCookie('access_token');
  console.log(hasToken);

  return hasToken;
};
