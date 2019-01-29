import { Dispatch } from 'redux';
import { fetchProducts } from '../lib/services';
import { EProductType } from '../lib/enums';



export const GET_PRINTERS_START = 'GET_PRINTERS_START';
export const GET_PRINTERS_SUCCESS = 'GET_PRINTERS_SUCCESS';
export const GET_PRINTERS_FAIL = 'GET_PRINTERS_FAIL';
export const SET_PRICE_FILTER = 'SET_PRICE_FILTER';
export const SET_SORT_ORDER = 'SET_SORT_ORDER';

export const getPrintersStart = () => {
  return { type: GET_PRINTERS_START };
}
export const getPrintersSuccess = (data) => {
  return { type: GET_PRINTERS_SUCCESS, data };
}
export const getPrintersFail = (error) => {
  return { type: GET_PRINTERS_FAIL, error };
}
export const setPriceFilter = (data) => {
  return { type: SET_PRICE_FILTER, data };
}
export const setSortOrder = () => {
  return { type: SET_SORT_ORDER };
}

export const loadPrinters = () => (dispatch: Dispatch) => {
  dispatch(getPrintersStart());
  return fetchProducts(EProductType.PRINTER).then(
    (response) => {
      dispatch(getPrintersSuccess(response))
    },
    error => dispatch(getPrintersFail(error)),
  );
};