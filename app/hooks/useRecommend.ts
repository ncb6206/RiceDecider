import { create } from 'zustand';

export interface imageZipProps {
  title: string;
  link: string;
  thumbnail: string;
  sizeheight: string;
  sizewidth: string;
}

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

interface informationProps {
  title: string;
  category: string;
  address: string;
  roadAddress: string;
  imageZip: Array<imageZipProps>;
}

interface RecommendStore {
  recommendData: Array<recommendProps>;
  recommendImage: Array<string>;
  information: informationProps;
}

const useRecommendStore = create<RecommendStore>(set => ({
  recommendData: [],
  recommendImage: [],
  information: {
    title: '',
    category: '',
    address: '',
    roadAddress: '',
    imageZip: [],
  },
}));

export default useRecommendStore;
