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

export interface Meta {
  is_end: boolean;
  pageable_count: number;
  total_count: number;
}

export interface ImageQueryType {
  documents: imageZipProps[];
  meta: Meta;
}
