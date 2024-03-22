import { create } from 'zustand';

export interface imageZipProps {
  collection: string;
  datetime: string;
  display_sitename: string;
  doc_url: string;
  height: number;
  image_url: string;
  thumbnail_url: string;
  width: number;
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
  setRecommendData: (data: Array<recommendProps>) => void;
  setRecommendImage: (image: Array<string>) => void;
  setInformation: (info: informationProps) => void;
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
  setRecommendData: data => set({ recommendData: data }),
  setRecommendImage: image => set({ recommendImage: image }),
  setInformation: info => set({ information: info }),
}));

export default useRecommendStore;
