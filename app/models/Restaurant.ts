export interface RestaurantProps {
  title: string;
  link?: string;
  category: string;
  description?: string;
  telephone?: string;
  address: string;
  roadAddress: string;
  mapx?: string;
  mapy?: string;
}

export interface RestaurantType {
  lastBuildDate: string;
  total: number;
  start: number;
  display: number;
  items: RestaurantProps[];
}
