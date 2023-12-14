import { deleteCookie } from 'cookies-next';
import toast from 'react-hot-toast';

const deleteToken = () => {
  deleteCookie('access_token');
  deleteCookie('refresh_token');
  toast('토큰 시간 만료로 자동로그아웃 되었습니다!');
};

export default deleteToken;
