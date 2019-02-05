import { Reducer } from 'redux';
import {
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_FAIL,
} from '../actions/productsActions';
import { EState } from '../lib/enums';
import { IProductsState } from '../lib/models';

const initialState:IProductsState = {
  allIds: [],
  byId: {},
};

const productsReducer: Reducer<IProductsState> = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCTS_SUCCESS:
      return {
        allIds: [ ...state.allIds, ...action.data.allIds ],
        byId: { ...state.byId,  ...action.data.byId },
      };
    case GET_PRODUCTS_FAIL:
      console.log(action.error);
      return { ...state, state: EState.FAIL };
    default: return state;
  }
};

export default productsReducer;
