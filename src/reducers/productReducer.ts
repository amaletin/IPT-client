import unionBy from 'lodash/unionBy';
import { Reducer } from 'redux';
import {
  GET_PRODUCTS_START,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_FAIL,
} from '../actions/productActions';
import { EState } from '../lib/enums';
import { IProductsState } from '../lib/models';
import { processProducts } from './utils';

const initialState:IProductsState = {
  data: [],
  state: EState.IDLE,
};

const productReducer: Reducer<IProductsState> = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCTS_START:
      return { ...state, state: EState.FETCHING };
    case GET_PRODUCTS_SUCCESS:
      const products = processProducts(action.data);
      return {
        ...state,
        data: unionBy(state.data, products, 'id'),
        state: EState.SUCCESS,
      };
    case GET_PRODUCTS_FAIL:
      console.log(action.error);
      return { ...state, state: EState.FAIL };
    default: return state;
  }
};

export default productReducer;
