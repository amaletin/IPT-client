import { Dispatch } from 'redux';
import { fetchCategories, fetchProduct, fetchProducts } from '../lib/services';
import { EProductType } from '../lib/enums';

export const GET_PRODUCTS_START = 'GET_PRODUCTS_START';
export const GET_PRODUCTS_SUCCESS = 'GET_PRODUCTS_SUCCESS';
export const GET_PRODUCTS_FAIL = 'GET_PRODUCTS_FAIL';

export const GET_PRODUCT_START = 'GET_PRODUCT_START';
export const GET_PRODUCT_SUCCESS = 'GET_PRODUCT_SUCCESS';
export const GET_PRODUCT_FAIL = 'GET_PRODUCT_FAIL';

export const GET_CATEGORIES_START = 'GET_CATEGORIES_START';
export const GET_CATEGORIES_SUCCESS = 'GET_CATEGORIES_SUCCESS';
export const GET_CATEGORIES_FAIL = 'GET_CATEGORIES_FAIL';

export const getProductsStart = () => {
  return { type: GET_PRODUCTS_START };
}
export const getProductsSuccess = (data) => {
  return { type: GET_PRODUCTS_SUCCESS, data };
}
export const getProductsFail = (error) => {
  return { type: GET_PRODUCTS_FAIL, error };
}

export const getProductStart = () => {
  return { type: GET_PRODUCT_START };
}
export const getProductSuccess = (data) => {
  return { type: GET_PRODUCT_SUCCESS, data };
}
export const getProductFail = (error) => {
  return { type: GET_PRODUCT_FAIL, error };
}

export const getCategoriesStart = () => {
  return { type: GET_CATEGORIES_START };
}
export const getCategoriesSuccess = (data) => {
  return { type: GET_CATEGORIES_SUCCESS, data };
}
export const getCategoriesFail = (error) => {
  return { type: GET_CATEGORIES_FAIL, error };
}

export const loadProduct = (id: number) => (dispatch: Dispatch) => {
  dispatch(getProductStart());
  return fetchProduct(id).then(
    (response) => {
      dispatch(getProductSuccess(response))
    },
    error => dispatch(getProductFail(error)),
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

export const loadCategories = (type: EProductType) => (dispatch: Dispatch) => {
  dispatch(getCategoriesStart());
  return fetchCategories(type).then(
    (response) => {
      dispatch(getCategoriesSuccess(response))
    },
    error => dispatch(getCategoriesFail(error)),
  );
};
