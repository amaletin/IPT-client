import { Dictionary } from 'lodash';
import { EProductType } from './enums';

export interface IAppState {
  filters: IFiltersState;
  posts: IPostsState;
  products: IProductsState;
  categories: ICategoriesState;
  sorting: ISortingState;
}

export interface IProductsState {
  allIds: number[];
  byId: Dictionary<IProduct>;
}

export interface ICategoriesState {
  allIds: number[];
  byId: Dictionary<ICategory>;
}

export interface IFiltersState {
  printers: IPrintersFilters;
  pens: ICommonFilter;
  scanners: ICommonFilter;
  consumables: ICommonFilter;
}

export interface IPostsState {
  allIds: number[];
  byId: Dictionary<IPost>;
}

export interface ISortingState {
  printers: string;
  pens: string;
  scanners: string;
  consumables: string;
}

export interface ICommonFilter {
  price: IFilterBlock<IPriceFilterBlock>;
}

export interface IFilterBlock<T> {
  filter: T;
  isOpen: boolean;
}

export interface IArrayFilterBlock {
  all: string[];
  selected: string[];
}

export interface IPrintersFilters extends ICommonFilter {
  brands: IFilterBlock<IArrayFilterBlock>;
  technology: IFilterBlock<IArrayFilterBlock>;
  chamberSize: IFilterBlock<IChamberSizeFilterBlock>;
  chamberType: IFilterBlock<IArrayFilterBlock>;
  heatedBed: IFilterBlock<boolean>;
  layerResolution: IFilterBlock<IArrayFilterBlock>;
  extruders: IFilterBlock<IArrayFilterBlock>;
}

export interface IChamberSizeFilterBlock {
  height: IRange;
  length: IRange;
  width: IRange;
}

export interface IPriceFilterBlock {
  range: IRange;
  value: IRange;
}

export interface IRange {
  max: number;
  min: number;
}

export interface ICategory {
  id: number;
  name: string;
  parent: number;
  picture: string;
  type: EProductType;
}

export interface IProduct {
  id: number;
  brand?: string;
  name: string;
  picture?: string;
  price?: number;
  category?: number;
  type: EProductType;
  technology?: string;
  chamberHeight?: number;
  chamberLength?: number;
  chamberType?: string;
  chamberWidth?: number;
  heatedBed?: boolean;
  layerResolution?: string;
  extruders?: number;
  description?: string;
}

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
