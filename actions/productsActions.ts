import { Dispatch } from 'redux';
import { fetchProduct, fetchProducts } from '../lib/services';
import { EProductType } from '../lib/enums';

export const GET_PRODUCTS_START = 'GET_PRODUCTS_START';
export const GET_PRODUCTS_SUCCESS = 'GET_PRODUCTS_SUCCESS';
export const GET_PRODUCTS_FAIL = 'GET_PRODUCTS_FAIL';

export const getProductsStart = () => {
  return { type: GET_PRODUCTS_START };
}
export const getProductsSuccess = (data) => {
  return { type: GET_PRODUCTS_SUCCESS, data };
}
export const getProductsFail = (error) => {
  return { type: GET_PRODUCTS_FAIL, error };
}

export const loadProduct = (id: number) => (dispatch: Dispatch) => {
  dispatch(getProductsStart());
  return fetchProduct(id).then(
    (response) => {
      dispatch(getProductsSuccess(response))
    },
    error => dispatch(getProductsFail(error)),
  )
}

export const loadProducts = (type: EProductType) => (dispatch: Dispatch) => {
  dispatch(getProductsStart());
  return fetchProducts(type).then(
    (response) => {
      dispatch(getProductsSuccess(response))
    },
    error => dispatch(getProductsFail(error)),
  );
};
