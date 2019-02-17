import { Dispatch } from 'redux';
import { processProducts } from '../lib/dataUtils';
import { IProductsState } from '../lib/models';
import { fetchSearchProducts } from '../lib/services';

export const SET_SEARCH_STRING = 'SET_SEARCH_STRING';
export const RESET_SEARCH = 'RESET_SEARCH';
export const SEARCH_PRODUCTS_START = 'SEARCH_PRODUCTS_START';
export const SEARCH_PRODUCTS_SUCCESS = 'SEARCH_PRODUCTS_SUCCESS';
export const SEARCH_PRODUCTS_FAIL = 'SEARCH_PRODUCTS_FAIL';

export const setSearchString = (data) => {
  return { type: SET_SEARCH_STRING, data };
};

export const resetSearch = () => {
  return { type: RESET_SEARCH };
};

export const searchProductsStart = () => {
  return { type: SEARCH_PRODUCTS_START };
};

export const searchProductsSuccess = (data) => {
  return { type: SEARCH_PRODUCTS_SUCCESS, data };
};

export const searchProductsFail = (error) => {
  return { type: SEARCH_PRODUCTS_FAIL, error };
};

export const searchProducts = (str: string) => (dispatch: Dispatch) => {
  dispatch(searchProductsStart());
  return fetchSearchProducts(str).then(
    (response) => {
      const data: IProductsState = processProducts(response.data);
      dispatch(searchProductsSuccess(data));
    },
    (error) => dispatch(searchProductsFail(error)),
  );
};
