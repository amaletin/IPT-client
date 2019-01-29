import keyBy from 'lodash/keyBy';
import { Reducer } from 'redux';
import {
  GET_PRODUCTS_START,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_FAIL,
  GET_PRODUCT_START,
  GET_PRODUCT_SUCCESS,
  GET_PRODUCT_FAIL,
  GET_CATEGORIES_START,
  GET_CATEGORIES_SUCCESS,
  GET_CATEGORIES_FAIL
} from '../actions/catalogActions';
import { EState } from '../lib/enums';
import { ICatalogState } from '../lib/models';
import { processCategories, processProduct, processProducts } from './utils';

const initialState:ICatalogState = {
  categories: [],
  currentProductId: null,
  products: [],
  state: EState.IDLE,
};

const catalogReducer: Reducer<ICatalogState> = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCTS_START:
    case GET_PRODUCT_START:
    case GET_CATEGORIES_START:
      return { ...state, state: EState.FETCHING };
    case GET_PRODUCTS_SUCCESS:
      const products = keyBy(processProducts(action.data), 'id');
      return {
        ...state,
        products: { ...state.products, ...products },
        state: EState.SUCCESS,
      };
    case GET_PRODUCT_SUCCESS:
      const processedProduct = processProduct(action.data.data)
      const product = keyBy([processedProduct], 'id');
      console.log(product)
      return {
        ...state,
        currentProductId: processedProduct.id,
        products: { ...state.products, ...product },
        state: EState.SUCCESS,
      };
    case GET_CATEGORIES_SUCCESS:
      const categories = keyBy(processCategories(action.data), 'id');
      return {
        ...state,
        categories: { ...state.categories, ...categories },
        state: EState.SUCCESS,
      };
    case GET_PRODUCTS_FAIL:
    case GET_PRODUCT_FAIL:
    case GET_CATEGORIES_FAIL:
      console.log(action.error);
      return { ...state, state: EState.FAIL };
    default: return state;
  }
};

export default catalogReducer;
