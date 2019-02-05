import keyBy from 'lodash/keyBy';
import { Reducer } from 'redux';
import {
  GET_PRODUCTS_START,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_FAIL,
} from '../actions/productsActions';
import { EState } from '../lib/enums';
import { IProductsState } from '../lib/models';
import { processProducts } from '../lib/dataUtils';

const initialState:IProductsState = {
  allIds: [],
  byId: {},
};

const productsReducer: Reducer<IProductsState> = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCTS_START:
      return { ...state, state: EState.FETCHING };
    case GET_PRODUCTS_SUCCESS:
      const products = processProducts(action.data);
      const ids = products.map(p => p.id);
      return {
        ...state,
        allIds: [...state.allIds, ...ids],
        byId: { ...state.byId,  ...keyBy(products, 'id')},
        state: EState.SUCCESS,
      };
    case GET_PRODUCTS_FAIL:
      console.log(action.error);
      return { ...state, state: EState.FAIL };
    default: return state;
  }
};

export default productsReducer;
