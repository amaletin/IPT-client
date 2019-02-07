import {
  Dictionary,
  filter,
  isEmpty,
  keyBy,
  map,
} from 'lodash';
import { EProductType } from './enums';
import {
  IBrand,
  ICommonFilter,
  IFilterBlock,
  IFiltersState,
  IPriceFilterBlock,
  IPriceRange,
  IPrintersFilters,
  IProduct,
} from './models';

export const filterPrinters = (filters: IPrintersFilters, printers: IProduct[]): IProduct[] => {
  const price = filters.price.filter;
  const brands = filters.brands.filter;
  const filteredPrinters = filter(printers, (prod) => {
    return (
      (prod.price <= price.value.max
      && prod.price >= price.value.min)
      && brands[prod.brand.id].selected
    );
  });
  return filteredPrinters;
};

export const filterPens = (filters: ICommonFilter, pens: IProduct[]): IProduct[] => {
  const price = filters.price.filter;
  const filteredPens = filter(pens, (prod) => {
    return (
      prod.price <= price.value.max
      && prod.price >= price.value.min
    );
  });
  return filteredPens;
};

export const filterScanners = (filters: ICommonFilter, scanners: IProduct[]): IProduct[] => {
  const price = filters.price.filter;
  const filteredScanners = filter(scanners, (prod) => {
    return (
      prod.price <= price.value.max
      && prod.price >= price.value.min
    );
  });
  return filteredScanners;
};

export const filterConsumables = (filters: ICommonFilter, consumables: IProduct[]): IProduct[] => {
  const price = filters.price.filter;
  const filteredConsumables = filter(consumables, (prod) => {
    return (
      prod.price <= price.value.max
      && prod.price >= price.value.min
    );
  });
  return filteredConsumables;
};

const updateBrandFilters = (oldBrands: Dictionary<IBrand>, products: IProduct[]): Dictionary<IBrand> => {
  const brands = keyBy(map(products, (prod) => {
    const brand = prod.brand;
    brand.selected = true;
    return brand;
  }), 'id');
  return { ...oldBrands, ...brands };
};

const updatePriceFilters = (oldPrice: IPriceFilterBlock, products: IProduct[]): IPriceFilterBlock => {
  if (isEmpty(products)) {
    return oldPrice;
  }
  const prices = map(products, (prod) => prod.price).sort((a, b) => a - b);
  const newLimits: IPriceRange = {
    max: prices[prices.length - 1],
    min: prices[0],
  };
  const filterIsNull = oldPrice.value.max === null || oldPrice.value.max === null;
  return {
    range: newLimits,
    value: filterIsNull ? newLimits : oldPrice.value,
  };
};

const updatePrintersFilters = (state: IPrintersFilters, products: IProduct[]): IPrintersFilters => {
  return {
    ...state,
    brands: { ...state.brands, filter: updateBrandFilters(state.brands.filter, products)},
    price: { ...state.price, filter: updatePriceFilters(state.price.filter, products) },
  };
};

const updateCommonFilters = (state, products) => {
  return {
    ...state,
    price: { ...state.price, filter: updatePriceFilters(state.price.filter, products) },
  };
};

export const updateFilters = (state: IFiltersState, products: Dictionary<IProduct>): IFiltersState => {
  return {
    consumables: updateCommonFilters(state.consumables, filter(products, (p) => p.type === EProductType.CONSUMABLE)),
    pens: updateCommonFilters(state.pens, filter(products, (p) => p.type === EProductType.PEN)),
    printers: updatePrintersFilters(state.printers, filter(products, (p) => p.type === EProductType.PRINTER)),
    scanners: updateCommonFilters(state.scanners, filter(products, (p) => p.type === EProductType.SCANER)),
  };
};

export const setPriceFilter = (state: IFilterBlock<IPriceFilterBlock>,
                               newData: IPriceRange): IFilterBlock<IPriceFilterBlock> => {
  return { ...state, filter: { ...state.filter,  value: newData} };
};

export const setBrandsFilter = (state: IFilterBlock<Dictionary<IBrand>>,
                                newData: number): IFilterBlock<Dictionary<IBrand>> => {
  const brands = map(state.filter, (b) => {
    if (b.id === newData) {
      b.selected = !b.selected;
    }
    return b;
  });
  return { ...state, filter: { ...state.filter, ...keyBy(brands, 'id')} };
};
