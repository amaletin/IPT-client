import { Dispatch } from 'redux';
import { processCategories } from '../lib/dataUtils';
import { EProductType } from '../lib/enums';
import { ICategoriesState } from '../lib/models';
import { fetchCategories } from '../lib/services';

export const GET_CATEGORIES_START = 'GET_CATEGORIES_START';
export const GET_CATEGORIES_SUCCESS = 'GET_CATEGORIES_SUCCESS';
export const GET_CATEGORIES_FAIL = 'GET_CATEGORIES_FAIL';

export const getCategoriesStart = () => {
  return { type: GET_CATEGORIES_START };
};
export const getCategoriesSuccess = (data: ICategoriesState) => {
  return { type: GET_CATEGORIES_SUCCESS, data };
};
export const getCategoriesFail = (error) => {
  return { type: GET_CATEGORIES_FAIL, error };
};

export const loadCategories = (type: EProductType) => (dispatch: Dispatch) => {
  dispatch(getCategoriesStart());
  return fetchCategories(type).then(
    (response) => {
      const data = processCategories(response.data);
      dispatch(getCategoriesSuccess(data));
    },
    (error) => dispatch(getCategoriesFail(error)),
  );
};
