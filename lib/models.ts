import { EProductType } from './enums';
import { Dictionary } from 'lodash';

export interface IAppState {
  filters: IFiltersState;
  posts: IPostsState;
  products: IProductsState;
  categories: ICategoriesState;
  sorting: ISortingState;
}

export interface IProductsState{
  allIds: number[];
  byId: Dictionary<IProduct>;
}

export interface ICategoriesState{
  categories: ICategory[];
}

export interface IFiltersState {
  printers: IPrintersFilters;
  pens: IPensFilters;
  scanners: IScannersFilters;
  consumables: IConsumablesFilters;
}

export interface IPostsState{
  allIds: number[];
  byId: Dictionary<IPost>;
}

export interface ISortingState {
  printers: string;
  pens: string;
  scanners: string;
  consumables: string;
}

export type IFiltersStateSlice = IPrintersFilters | IPensFilters | IScannersFilters | IConsumablesFilters;

export interface ICommonFilter {
  price: IFilterBlock<IPriceFilterBlock>;
}

export interface IFilterBlock<T> {
  filter: T;
  isOpen: boolean;
}

export interface IPrintersFilters extends ICommonFilter {
  brands: IFilterBlock<Dictionary<IBrand>>;
}

export interface IPensFilters extends ICommonFilter {}
export interface IScannersFilters extends ICommonFilter {}
export interface IConsumablesFilters extends ICommonFilter {}


export interface IPriceFilterBlock {
  range: IPriceRange;
  value: IPriceRange;
}

export interface IPriceRange {
  max: number;
  min: number;
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

export interface ICategory {
  id: number;
  name: string;
  parent: number;
  picture: string;
  type: EProductType;
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

export interface IPost {
  body: string;
  cover: string;
  coverCaption: string;
  excerpt: string;
  id: number;
  sort: number;
  status: number;
  subtitle: string;
  title: string;
}
