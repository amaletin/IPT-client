import {
  Dictionary,
  filter,
  isEmpty,
  map,
  uniq,
} from 'lodash';
import { EProductType } from './enums';
import {
  IArrayFilterBlock,
  IChamberSizeFilterBlock,
  ICommonFilter,
  IFilterBlock,
  IFiltersState,
  IPriceFilterBlock,
  IPrintersFilters,
  IProduct,
  IRange,
} from './models';

export const filterPrinters = (filters: IPrintersFilters, printers: IProduct[]): IProduct[] => {
  const price = filters.price.filter;
  return filter(printers, (prod) => {
    return (
      (prod.price <= price.value.max
      && prod.price >= price.value.min)
      && (isEmpty(filters.brands.filter.selected)
        || filters.brands.filter.selected.includes(prod.brand))
      && (isEmpty(filters.technology.filter.selected)
        || filters.technology.filter.selected.includes(prod.technology))
      && (isEmpty(filters.chamberType.filter.selected)
        || filters.chamberType.filter.selected.includes(prod.chamberType))
      && (isEmpty(filters.extruders.filter.selected)
        || filters.extruders.filter.selected.includes(prod.extruders.toString()))
      && (isEmpty(filters.layerResolution.filter.selected)
        || filters.layerResolution.filter.selected.includes(prod.layerResolution.toString()))
      && (!filters.heatedBed.filter || filters.heatedBed.filter === prod.heatedBed)
      && filterBySize(prod.chamberHeight, filters.chamberSize.filter.height)
      && filterBySize(prod.chamberLength, filters.chamberSize.filter.length)
      && filterBySize(prod.chamberWidth, filters.chamberSize.filter.width)
    );
  });
};

const filterBySize = (size: number, value: IRange): boolean => {
  const { min, max } = value;
  return (min === null && max === null)
  || (
    size !== null
    && (min === null && size <= max || max === null && size >= min || (size >= min && size <= max))
  );
};

export const filterProducts = (filters: ICommonFilter, products: IProduct[]): IProduct[] => {
  const { max, min } = filters.price.filter.value;
  const { brands } = filters;
  return filter(products, (prod) => {
    return prod.price <= max && prod.price >= min
      && (isEmpty(brands.filter.selected) || brands.filter.selected.includes(prod.brand));
  });
};

const updateArrayFilter = (oldItems: IArrayFilterBlock,
                           products: IProduct[], field: string): IArrayFilterBlock => {
  const items = uniq(map(filter(products, (prod) => prod[field] !== null), (prod) => prod[field].toString()));
  return { ...oldItems, ...{ all: items, selected: []} };
};

const updatePriceFilters = (oldPrice: IPriceFilterBlock, products: IProduct[]): IPriceFilterBlock => {
  if (isEmpty(products)) {
    return oldPrice;
  }
  const prices = map(products, (prod) => prod.price).sort((a, b) => a - b);
  const newLimits: IRange = {
    max: prices[prices.length - 1],
    min: prices[0],
  };
  const filterIsNull = oldPrice.value.max === null || oldPrice.value.max === null
    || oldPrice.value.max === oldPrice.value.max;
  return {
    range: newLimits,
    value: filterIsNull ? newLimits : oldPrice.value,
  };
};

const updatePrintersFilters = (state: IPrintersFilters, products: IProduct[]): IPrintersFilters => {
  return {
    ...state,
    brands: { ...state.brands, filter: updateArrayFilter(state.brands.filter, products, 'brand') },
    chamberType: { ...state.chamberType, filter: updateArrayFilter(state.chamberType.filter, products, 'chamberType') },
    extruders: { ...state.extruders, filter: updateArrayFilter(state.extruders.filter, products, 'extruders') },
    layerResolution: {
      ...state.layerResolution,
      filter: updateArrayFilter(state.layerResolution.filter, products, 'layerResolution'),
    },
    price: { ...state.price, filter: updatePriceFilters(state.price.filter, products) },
    technology: { ...state.technology, filter: updateArrayFilter(state.chamberType.filter, products, 'technology') },
  };
};

const updateFilters = (state, products) => {
  return {
    ...state,
    brands: { ...state.brands, filter: updateArrayFilter(state.brands.filter, products, 'brand') },
    price: { ...state.price, filter: updatePriceFilters(state.price.filter, products) },
  };
};

export const updateProductFilters = (state: IFiltersState, products: Dictionary<IProduct>): IFiltersState => {
  return {
    consumables: updateFilters(state.consumables, filter(products, (p) => p.type === EProductType.CONSUMABLE)),
    pens: updateFilters(state.pens, filter(products, (p) => p.type === EProductType.PEN)),
    printers: updatePrintersFilters(state.printers, filter(products, (p) => p.type === EProductType.PRINTER)),
    scanners: updateFilters(state.scanners, filter(products, (p) => p.type === EProductType.SCANER)),
  };
};

export const setPriceFilter = (state: IFilterBlock<IPriceFilterBlock>,
                               newData: IRange): IFilterBlock<IPriceFilterBlock> => {
  return { ...state, filter: { ...state.filter,  value: newData} };
};

export const setArrayFilter = (state: IFilterBlock<IArrayFilterBlock>,
                               newData: string): IFilterBlock<IArrayFilterBlock> => {
  let updatedSelected = [];
  if (state.filter.selected.includes(newData)) {
    updatedSelected = filter(state.filter.selected, (s) => s !== newData);
  } else {
    updatedSelected = [ ...state.filter.selected, newData];
  }
  return { ...state, filter: { ...state.filter, selected: updatedSelected}};
};

export const setSizeFilter = (state: IFilterBlock<IChamberSizeFilterBlock>,
                              newData: IChamberSizeFilterBlock): IFilterBlock<IChamberSizeFilterBlock> => {
return { ...state, filter: { ...state.filter, ...newData} };
};
