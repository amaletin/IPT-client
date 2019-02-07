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

export interface IPrintersFilters extends ICommonFilter {
  brands: IFilterBlock<Dictionary<IBrand>>;
}

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

export interface ICategory {
  id: number;
  name: string;
  parent: number;
  picture: string;
  type: EProductType;
}

export interface IProduct {
  id: number;
  brand: IBrand;
  name: string;
  picture?: any;
  price?: number;
  category?: number;
  type: EProductType;
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
