import { EFilterType, EProductTypeString } from '../lib/enums';
import {
  setArrayFilter,
  setPriceFilter,
  setSizeFilter,
} from '../lib/filterUtils';

export const SET_FILTER_SUCCESS = 'SET_FILTER_SUCCESS';
export const SET_FILTER_FAILURE = 'SET_FILTER_FAILURE';
export const TOGGLE_FILTER_OPEN = 'TOGGLE_FILTER_OPEN';

export const toggleFilterOpen = (filterType: EFilterType, productType: EProductTypeString) => {
  return { type: TOGGLE_FILTER_OPEN, filterType, productType};
};

export const setFilter = (value, state, filterType: EFilterType, productType: EProductTypeString) => {
  const action = { type: SET_FILTER_SUCCESS, data: state, filterType, productType };
  switch (filterType) {
    case EFilterType.PRICE:
      return { ...action, data: setPriceFilter(state, value) };
    case EFilterType.CHAMBER_SIZE:
      return { ...action, data: setSizeFilter(state, value) };
    case EFilterType.BRAND:
    case EFilterType.TECHNNOLOGY:
    case EFilterType.CHAMBER_TYPE:
    case EFilterType.EXTRUDERS:
    case EFilterType.LAYER_RESOLUTION:
    case EFilterType.HEATED_BED:
      return { ...action, data: setArrayFilter(state, value) };
    default:
      return { ...action, type: SET_FILTER_FAILURE};
  }
};
