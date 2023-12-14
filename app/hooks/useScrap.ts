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
  addScrapAddressData: (scrascrapAddressp: string) => void;
}

const useScrapStore = create<ScrapStore>(set => ({
  scrapData: [],
  scrapAddressData: [],
  addScrapAddressData: (scrapAddress: string) =>
    set(state => {
      const newScrapAddressList = [...state.scrapAddressData, scrapAddress];

      return { scrapAddressData: newScrapAddressList };
    }),
}));

export default useScrapStore;
