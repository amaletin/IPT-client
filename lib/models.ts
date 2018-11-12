import { EState, EProductType } from './enums';

export interface IAppState {
  brands: IBrandsState;
  posts: IPostsState;
  catalog: ICatalogState;
  ui: any;
}

export interface IStateChunk {
  state: EState;
}

export interface ICatalogState extends IStateChunk {
  categories: ICategory[];
  currentProductId: number;
  products: IProduct[];
}

export interface IBrandsState extends IStateChunk {
  data: IBrand[];
}

export interface IPostsState extends IStateChunk {
  current: IPost | {};
  data: IPost[];
}

export interface IUIState {
  showLoader: boolean;
}

export interface IBrand {
  name: string;
  id: number;
}

export interface IFile {
  id: number;
  thumbnail_url: string;
}

export interface IServerResponse {
  meta?: {
    table: string;
    type: string;
    total?: number;
    Published?: number;
    Deleted?: number;
    Draft?: number;
    total_entries?: number;
  }
  data: any[] | {};
}

export interface IFileResponse extends IServerResponse {
  data: IFileRaw;
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

export interface ICategoriesResponse extends IServerResponse {
  data: ICategoryRaw[];
}

export interface ICategoryRaw {
  id: number;
  name: string;
  parent: any;
  picture: IFileResponse;
  type: any;
}

export interface ICategory {
  id: number;
  name: string;
  parent: number;
  picture: string;
  type: EProductType;
}

export interface IProductsResponse extends IServerResponse {
  data: IProductRaw[];
}

export interface IProductRaw {
  chamber_height?: number;
  chamber_length?: number;
  chamber_type?: string;
  chamber_width?: number;
  description?: string;
  extruders?: number;
  heated_bed?: boolean;
  id: number;
  layer_resolution?: string;
  name: string;
  category?: any;
  picture?: IFileResponse;
  price?: number;
  type: any;
}

export interface IProductCommon {
  id: number;
  name: string;
  picture?: any;
  price?: number;
  category?: number;
  type: EProductType;
}

export interface IPrinter extends IProductCommon {
  chamberHeight?: number;
  chamberLength?: number;
  chamberType?: string;
  chamberWidth?: number;
  description?: string;
  extruders?: number;
  heatedBed?: boolean;
  layerResolution?: string;
}

export interface IScanner extends IProductCommon {}

export interface IPen extends IProductCommon {}

export interface IConsumable extends IProductCommon {}

export interface IProduct extends IPrinter, IScanner, IPen, IConsumable {}

export interface IPostsResponse extends IServerResponse {
  data: IPostRaw[];
}

export interface IPostRaw {
  body: string;
  cover: IFileResponse;
  cover_caption: string;
  excerpt: string;
  id: number;
  sort: number;
  status: number;
  subtitle: string;
  title: string;
}

export interface IPost {
  body: string;
  cover: string;
  cover_caption: string;
  excerpt: string;
  id: number;
  sort: number;
  status: number;
  subtitle: string;
  title: string;
}

