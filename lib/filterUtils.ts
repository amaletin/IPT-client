import isEmpty from 'lodash/isEmpty';
import {
  Dictionary,
  filter,
  keyBy,
  map,
} from 'lodash';
import { EProductType } from './enums'
import {
  IBrand,
  IFilterBlock,
  IFiltersState,
  IPriceFilterBlock,
  IPriceRange,
  IPrintersFilters,
  IProduct,
  IPensFilters,
} from "./models";

export const filterPrinters = (filters: IPrintersFilters, printers: IProduct[]): IProduct[] => {
  const price = filters.price.filter;
  const brands = filters.brands.filter;
  const filteredPrinters = filter(printers, (prod) => {
    return (
      (prod.price <= price.value.max
      && prod.price >= price.value.min)
      && brands[prod.brand.id].selected
    )
  })
  return filteredPrinters;
}

export const filterPens = (filters: IPensFilters, pens: IProduct[]): IProduct[] => {
  const price = filters.price.filter;
  const filteredPens = filter(pens, (prod) => {
    return (
      prod.price <= price.value.max
      && prod.price >= price.value.min
    )
  })
  return filteredPens;
}

export const filterScanners = (filters: IPensFilters, scanners: IProduct[]): IProduct[] => {
  const price = filters.price.filter;
  const filteredScanners = filter(scanners, (prod) => {
    return (
      prod.price <= price.value.max
      && prod.price >= price.value.min
    )
  })
  return filteredScanners;
}

export const filterConsumables = (filters: IPensFilters, consumables: IProduct[]): IProduct[] => {
  const price = filters.price.filter;
  const filteredConsumables = filter(consumables, (prod) => {
    return (
      prod.price <= price.value.max
      && prod.price >= price.value.min
    )
  })
  return filteredConsumables;
}

const updateBrandFilters = (oldBrands: Dictionary<IBrand>, products: IProduct[]): Dictionary<IBrand> => {
  const brands = keyBy(map(products, (prod) => {
    const brand = prod.brand;
    brand.selected = true;
    return brand;
  }), 'id');
  
  return { ...oldBrands, ...brands };
}

const updatePriceFilters = (oldPrice: IPriceFilterBlock, products: IProduct[]): IPriceFilterBlock => {
  if(isEmpty(products)) {
    return oldPrice;
  }
  const prices = map(products, prod => prod.price).sort((a, b) => a - b);
  const newLimits: IPriceRange = {
    max: prices[prices.length - 1],
    min: prices[0],
  };
  const filterIsNull = oldPrice.value.max === null || oldPrice.value.max === null;
  return {
    range: newLimits,
    value: filterIsNull ? newLimits : oldPrice.value,
  }
}

const updatePrintersFilters = (state: IPrintersFilters, products: IProduct[]): IPrintersFilters => {
  return {
    ...state,
    price: { ...state.price, filter: updatePriceFilters(state.price.filter, products) },
    brands: { ...state.brands, filter: updateBrandFilters(state.brands.filter, products)},
  }
}

const updateCommonFilters = (state, products) => {
  return {
    ...state,
    price: { ...state.price, filter: updatePriceFilters(state.price.filter, products) },
  }
}

export const updateFilters = (state: IFiltersState, products: Dictionary<IProduct>): IFiltersState => {
  return {
    printers: updatePrintersFilters(state.printers, filter(products, p => p.type === EProductType.PRINTER)),
    pens: updateCommonFilters(state.pens, filter(products, p => p.type === EProductType.PEN)),
    scanners: updateCommonFilters(state.scanners, filter(products, p => p.type === EProductType.SCANER)),
    consumables: updateCommonFilters(state.consumables, filter(products, p => p.type === EProductType.CONSUMABLE)),
  }
}

export const setPriceFilter = (state: IFilterBlock<IPriceFilterBlock>, newData): IFilterBlock<IPriceFilterBlock> => {
  return { ...state, filter: { ...state.filter,  value: newData} };
}

export const setBrandsFilter = (state: IFilterBlock<Dictionary<IBrand>>, newData): IFilterBlock<Dictionary<IBrand>> => {
  const brands = map(state.filter, (b) => {
    if(b.id === newData) {
      b.selected = !b.selected;
    }
    return b;
  });
  return { ...state, filter: { ...state.filter, ...keyBy(brands, 'id')} };
}
