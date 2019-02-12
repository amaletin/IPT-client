import { uniq } from 'lodash';
import { Reducer } from 'redux';
import {
  GET_PRODUCTS_FAIL,
  GET_PRODUCTS_SUCCESS,
} from '../actions/productsActions';
import { EState } from '../lib/enums';
import { IProductsState } from '../lib/models';

const initialState: IProductsState = {
  allIds: [],
  byId: {},
};

const productsReducer: Reducer<IProductsState> = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCTS_SUCCESS:
      return {
        allIds: uniq([ ...state.allIds, ...action.data.allIds ]),
        byId: { ...state.byId,  ...action.data.byId },
      };
    case GET_PRODUCTS_FAIL:
      console.log(action.error); // tslint:disable-line no-console
      return { ...state, state: EState.FAIL };
    default: return state;
  }
};

export default productsReducer;
