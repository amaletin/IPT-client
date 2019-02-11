export interface IServerResponse<T> {
  data: T;
  meta?: {
    table: string;
    type: string;
    total?: number;
    Published?: number;
    Deleted?: number;
    Draft?: number;
    total_entries?: number;
  };
}

export interface IFileRaw {
  id: number;
  status: number;
  name: string;
  title: string;
  location?: string;
  caption?: string;
  type: string;
  charset: string;
  tags?: string;
  width: number;
  height: number;
  size: number;
  embed_id?: any;
  user: number;
  date_uploaded: string;
  storage_adapter: string;
  url: string;
  thumbnail_url: string;
  old_thumbnail_url: string;
  html: string;
}

export interface ICategoryRaw {
  id: number;
  name: string;
  parent: any;
  picture: IServerResponse<IFileRaw>;
  type: any;
}

export interface IBrandRaw {
  id: number;
  name: string;
  sort: number;
}

export interface ITechnologyRaw {
  id: number;
  name: string;
}

export interface IProductRaw {
  brand?: IServerResponse<IBrandRaw>;
  chamber_height?: string;
  chamber_length?: string;
  chamber_type?: string;
  chamber_width?: string;
  description?: string;
  extruders?: number;
  heated_bed?: boolean;
  id: number;
  layer_resolution?: string;
  name: string;
  category?: any;
  picture?: IServerResponse<IFileRaw>;
  price?: number;
  type: any;
  technology?: IServerResponse<ITechnologyRaw>;
}

export interface IPostRaw {
  body: string;
  cover: IServerResponse<IFileRaw>;
  cover_caption: string;
  excerpt: string;
  id: number;
  sort: number;
  status: number;
  subtitle: string;
  title: string;
}
