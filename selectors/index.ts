import { Dictionary, filter } from 'lodash';
import { createSelector } from 'reselect';
import { EProductType } from '../lib/enums';
import {
  filterPrinters,
  filterProducts,
} from '../lib/filterUtils';
import {
  IAppState,
  ICategory,
  ICommonFilter,
  IConfiguration,
  IPage,
  IPost,
  IPrintersFilters,
  IProduct,
} from '../lib/models';

export const getConfiguration = (state: IAppState): IConfiguration => state.ui.configuration;
const getProducts = (state: IAppState): Dictionary<IProduct> => state.products.byId;
const getCategories = (state: IAppState): Dictionary<ICategory> => state.categories.byId;
const getPrinterFilters = (state: IAppState): IPrintersFilters => state.filters.printers;
const getPenFilters = (state: IAppState): ICommonFilter => state.filters.pens;
const getScannerFilters = (state: IAppState): ICommonFilter => state.filters.scanners;
const getConsumableFilters = (state: IAppState): ICommonFilter => state.filters.consumables;
const getPages = (state: IAppState): Dictionary<IPage> => state.ui.pages.byId;
export const getPosts = (state: IAppState): Dictionary<IPost> => state.posts.byId;
const getFoundIds = (state: IAppState): number[] => state.search.foundIds;

export const getPostById = createSelector(
  [getPosts, (_, props) => props],
  (posts: IPost[], props) => posts[props.id],
);

export const getPageById = createSelector(
  [getPages, (_, props) => props],
  (pages: IPage[], props) => pages[props.id],
);

export const getPrinters = createSelector(
  [ getProducts ],
  (products: Dictionary<IProduct>) => {
    return filter(products, (p) => p.type === EProductType.PRINTER);
  },
);

export const getFilteredPrinters = createSelector(
  [getPrinters, getPrinterFilters],
  (printers: IProduct[], filters: IPrintersFilters) => {
    return filterPrinters(filters, printers);
  },
);

export const getPens = createSelector(
  [ getProducts ],
  (products: Dictionary<IProduct>) => {
    return filter(products, (p) => p.type === EProductType.PEN);
  },
);

export const getFilteredPens = createSelector(
  [getPens, getPenFilters],
  (pens: IProduct[], filters: ICommonFilter) => {
    return filterProducts(filters, pens);
  },
);

export const getScanners = createSelector(
  [ getProducts ],
  (products: Dictionary<IProduct>) => {
    return filter(products, (p) => p.type === EProductType.SCANER);
  },
);

export const getFilteredScanners = createSelector(
  [getScanners, getScannerFilters],
  (scanners: IProduct[], filters: ICommonFilter) => {
    return filterProducts(filters, scanners);
  },
);

export const getConsumables = createSelector(
  [ getProducts ],
  (products: Dictionary<IProduct>) => {
    return filter(products, (p) => p.type === EProductType.CONSUMABLE);
  },
);

export const getRootConsumables = createSelector(
  [ getConsumables ],
  (consumables: IProduct[]) => {
    return filter(consumables, (c) => c.category === null);
  },
);

export const getFilteredRootConsumables = createSelector(
  [getRootConsumables, getConsumableFilters],
  (consumables: IProduct[], filters: ICommonFilter) => {
    return filterProducts(filters, consumables);
  },
);

export const getFilteredConsumables = createSelector(
  [getConsumables, getConsumableFilters],
  (consumables: IProduct[], filters: ICommonFilter) => {
    return filterProducts(filters, consumables);
  },
);

export const getRootCategories = createSelector(
  [ getCategories ],
  (categories: Dictionary<ICategory>) => {
    return filter(categories, (c) => c.parent === null);
  },
);

export const getCategorieById = createSelector(
  [getCategories, (_, props) => props],
  (categories: ICategory[], props) => {
    return categories[props.id];
  },
);

export const getCategoriesByParentId = createSelector(
  [getCategories, (_, props) => props],
  (categories: ICategory[], props) => {
    return filter(categories, (c) => c.parent === parseInt(props.id, 10));
  },
);

export const getFilteredConsumablesByCategoryId = createSelector(
  [getConsumables, (_, props) => props],
  (consumables: IProduct[], props) => {
    return filter(consumables, (c) => c.category === parseInt(props.id, 10));
  },
);

export const getProductById = createSelector(
  [getProducts, (_, props) => props],
  (products: Dictionary<IProduct>, props) => products[props.id],
);

export const getSearchedProducts = createSelector(
  [getProducts, getFoundIds],
  (products: Dictionary<IProduct>, ids: number[]) => ids.map((id) => products[id]),
);
