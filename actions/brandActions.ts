import { Dispatch } from 'redux';
import { fetchBrands } from '../lib/services';

export const GET_BRANDS_START = 'GET_BRANDS_START';
export const GET_BRANDS_SUCCESS = 'GET_BRANDS_SUCCESS';
export const GET_BRANDS_FAIL = 'GET_BRANDS_FAIL';

const getBrandsStart = () => {
  return { type: GET_BRANDS_START }
}

/**
 * Async Action creator for loadind brands
 */
export const loadBrands = () => (dispatch: Dispatch) => {
  dispatch(getBrandsStart());
  return fetchBrands().then(
    response => dispatch({ type: GET_BRANDS_SUCCESS, data: response }),
    error => dispatch({ type: GET_BRANDS_FAIL, data: error }),
  );
};
