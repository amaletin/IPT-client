import { EFilterType, EProductTypeString } from '../lib/enums';
import {
  setBrandsFilter,
  setPriceFilter,
} from '../lib/filterUtils';

export const SET_FILTER_SUCCESS = 'SET_FILTER_SUCCESS';
export const SET_FILTER_FAILURE = 'SET_FILTER_FAILURE';

export const SET_PRINTERS_BRAND_OPEN = 'SET_PRINTERS_BRAND_OPEN';

export const setPrintersBrandFilterOpen = () => {
  return { type: SET_PRINTERS_BRAND_OPEN };
};

export const setFilter = (value, state, filterType: EFilterType, productType: EProductTypeString) => {
  const action = { type: SET_FILTER_SUCCESS, data: state, filterType, productType };
  switch (filterType) {
    case EFilterType.PRICE:
      return { ...action, data: setPriceFilter(state, value) };
    case EFilterType.BRAND:
      return { ...action, data: setBrandsFilter(state, value) };
    default:
      return { ...action, type: SET_FILTER_FAILURE};
  }
};
