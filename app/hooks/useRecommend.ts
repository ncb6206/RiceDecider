import { create } from 'zustand';

export interface recommendProps {
  title: string;
  link?: string;
  category: string;
  description?: string;
  telephone?: string;
  address: string;
  roadAddress: string;
  mapx?: string;
  mapy?: string;
  imageSrc?: string;
}

interface RecommendStore {
  recommendData: Array<recommendProps>;
  recommendImage: Array<string>;
  recommend: recommendProps;
}

const useRecommendStore = create<RecommendStore>(set => ({
  recommendData: [],
  recommendImage: [],
  recommend: {
    title: '',
    category: '',
    address: '',
    roadAddress: '',
    imageSrc: '',
  },
}));

export default useRecommendStore;
