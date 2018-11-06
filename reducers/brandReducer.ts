import unionBy from 'lodash/unionBy';
import { Reducer } from 'redux';
import {
  GET_BRANDS_START,
  GET_BRANDS_SUCCESS,
  GET_BRANDS_FAIL,
} from '../actions/brandActions';
import { EState } from '../lib/enums';
import { IBrandsState } from '../lib/models';

const initialState:IBrandsState = {
  data: [],
  state: EState.IDLE,
};

const brandsReducer: Reducer<IBrandsState> = (state = initialState, action) => {
  switch (action.type) {
    case GET_BRANDS_START:
      return Object.assign({}, state, {
        state: EState.FETCHING,
      });
    case GET_BRANDS_SUCCESS:
      const brands = action.data.data;
      return Object.assign({}, state, {
        data: unionBy(state.data, brands, 'id'),
        state: EState.SUCCESS,
      });
    case GET_BRANDS_FAIL:
      console.log(action.error);
      return Object.assign({}, state, {
        state: EState.FAIL,
      });
    default: return state;
  }
};

export default brandsReducer;
