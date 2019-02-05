import { createSelector } from 'reselect';
import { Dictionary, filter } from 'lodash';
import { EProductType } from '../lib/enums';
import {
  IProduct,
  IAppState,
  IConsumablesFilters,
  IPensFilters,
  IPrintersFilters,
  IScannersFilters,
  ICategory,
  IConsumable,
} from '../lib/models';
import {
  filterConsumables,
  filterPrinters,
  filterPens,
  filterScanners,
} from '../lib/filterUtils';

const getProducts = (state: IAppState): Dictionary<IProduct> => state.products.byId;
const getCategories = (state: IAppState): ICategory[] => state.categories.categories;
const getPrinterFilters = (state: IAppState): IPrintersFilters => state.filters.printers;
const getPenFilters = (state: IAppState): IPensFilters => state.filters.pens;
const getScannerFilters = (state: IAppState): IScannersFilters => state.filters.scanners;
const getConsumableFilters = (state: IAppState): IConsumablesFilters => state.filters.consumables;

export const getPrinters = createSelector(
  [ getProducts ],
  (products: Dictionary<IProduct>) => {
    return filter(products, p => p.type === EProductType.PRINTER);
  }
)

export const getFilteredPrinters = createSelector(
  [getPrinters, getPrinterFilters],
  (printers: IProduct[], filters: IPrintersFilters) => {
    return filterPrinters(filters, printers);
  }
)

export const getPens = createSelector(
  [ getProducts ],
  (products: Dictionary<IProduct>) => {
    return filter(products, p => p.type === EProductType.PEN);
  }
)

export const getFilteredPens = createSelector(
  [getPens, getPenFilters],
  (pens: IProduct[], filters: IPensFilters) => {
    return filterPens(filters, pens);
  }
)

export const getScanners = createSelector(
  [ getProducts ],
  (products: Dictionary<IProduct>) => {
    return filter(products, p => p.type === EProductType.SCANER);
  }
)

export const getFilteredScanners = createSelector(
  [getScanners, getScannerFilters],
  (scanners: IProduct[], filters: IScannersFilters) => {
    return filterScanners(filters, scanners);
  }
)

export const getConsumables = createSelector(
  [ getProducts ],
  (products: Dictionary<IProduct>) => {
    return filter(products, p => p.type === EProductType.CONSUMABLE);
  }
)

export const getRootConsumables = createSelector(
  [ getConsumables ],
  (consumables: IProduct[]) => {
    return filter(consumables, c => c.category === null);
  }
)

export const getFilteredRootConsumables = createSelector(
  [getRootConsumables, getConsumableFilters],
  (consumables: IProduct[], filters: IConsumablesFilters) => {
    return filterConsumables(filters, consumables);
  }
)

export const getFilteredConsumables = createSelector(
  [getConsumables, getConsumableFilters],
  (consumables: IProduct[], filters: IConsumablesFilters) => {
    return filterConsumables(filters, consumables);
  }
)

export const getRootCategories = createSelector(
  [ getCategories ],
  (categories: ICategory[]) => {
    return filter(categories, c => c.parent === null);
  }
)

export const getCategoriesByParentId = createSelector(
  [getCategories, (state, props) => props],
  (categories: ICategory[], props) => {
    return filter(categories, c => c.parent === parseInt(props.id));
  }
)

export const getFilteredConsumablesByCategoryId = createSelector(
  [getConsumables, (state, props) => props],
  (consumables: IConsumable[], props) => {
    return filter(consumables, c => c.category === parseInt(props.id));
  }
)