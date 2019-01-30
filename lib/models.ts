import { EState, EProductType } from './enums';
import { Dictionary } from 'lodash';

export interface IServerResponse<T> {
  meta?: {
    table: string;
    type: string;
    total?: number;
    Published?: number;
    Deleted?: number;
    Draft?: number;
    total_entries?: number;
  },
  data: T
}

export interface IAppState {
  brands: IBrandsState;
  filters: IFilterState;
  posts: IPostsState;
  printers: IPrinterState;
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

export interface IPrinterState extends IStateChunk {
  currentProductId: number;
  filters: IFilterState;
  filtered: IPrinter[];
  list: IPrinter[];
  sortOrder: string;
}

export interface IPriceRange {
  max: number;
  min: number;
}

export interface IPriceFilter {
  range: IPriceRange;
  value: IPriceRange;
}

export interface IFilterState {
  price: IPriceFilter;
  brands: Dictionary<IBrand>;
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
  selected?: boolean;
}

export interface IFile {
  id: number;
  thumbnail_url: string;
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

export interface ICategory {
  id: number;
  name: string;
  parent: number;
  picture: string;
  type: EProductType;
}

export interface IBrandRaw {
  id: number;
  name: string;
  sort: number;
}

export interface IProductRaw {
  brand?: IServerResponse<IBrandRaw>;
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
  picture?: IServerResponse<IFileRaw>;
  price?: number;
  type: any;
}

export interface IProductCommon {
  id: number;
  brand: IBrand;
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

