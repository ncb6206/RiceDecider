import { hasCookie, deleteCookie } from 'cookies-next';
import { create } from 'zustand';

interface TokenStore {
  isLogin: boolean;
  setIslogin: (newLogin: boolean) => void;
  hasToken: () => void;
  logOut: () => void;
}

const useTokenStore = create<TokenStore>(set => ({
  isLogin: false,
  setIslogin: (newLogin: boolean) => set({ isLogin: newLogin }),
  hasToken: () =>
    set(() => {
      if (hasCookie('access_token')) return { isLogin: true };
      return { isLogin: false };
    }),
  logOut: () =>
    set(() => {
      deleteCookie('access_token');
      deleteCookie('refresh_token');
      return { isLogin: false };
    }),
}));

export default useTokenStore;
