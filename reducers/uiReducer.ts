import { Reducer } from 'redux';
import {
  GET_PRODUCTS_START,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_FAIL
} from '../actions/productActions';
import { IUIState } from '../lib/models';


const initialState:IUIState = {
  showLoader: false
}

const uiReducer: Reducer<IUIState> = (state = initialState, action) => {
  switch(action.type) {
    case GET_PRODUCTS_START:
      return Object.assign({}, state, {
        showLoader: true,
      });
    case GET_PRODUCTS_SUCCESS:
    case GET_PRODUCTS_FAIL:
      return Object.assign({}, state, {
        showLoader: false,
      });
    default:
      return state;
  }
}

export default uiReducer;
