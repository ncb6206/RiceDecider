import { create } from 'zustand';

export interface scrapListProps {
  memberEmail: string;
  detailURL: string;
  restaurantTitle: string;
  category: string;
  restaurantAddress: string;
}

interface ScrapStore {
  scrapData: scrapListProps[];
  scrapAddressData: string[];
  addScrapAddressData: (scrapAddress: string) => void;
  setScrapData: (scrapList: scrapListProps[]) => void;
  setScrapAddressData: (scrapAddress: string[]) => void;
}

const useScrapStore = create<ScrapStore>(set => ({
  scrapData: [],
  scrapAddressData: [],
  addScrapAddressData: (scrapAddress: string) =>
    set(state => {
      const newScrapAddressList = [...state.scrapAddressData, scrapAddress];

      return { scrapAddressData: newScrapAddressList };
    }),
  setScrapData: scrapList => set({ scrapData: scrapList }),
  setScrapAddressData: scrapAddress => set({ scrapAddressData: scrapAddress }),
}));

export default useScrapStore;
