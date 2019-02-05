import { Reducer } from 'redux';
import {
  GET_CATEGORIES_SUCCESS,
  GET_CATEGORIES_FAIL
} from '../actions/categoriesActions';
import { EState } from '../lib/enums';
import { ICategoriesState } from '../lib/models';

const initialState:ICategoriesState = {
  byId: {},
  allIds: [],
};

const categoriesReducer: Reducer<ICategoriesState> = (state = initialState, action) => {
  switch (action.type) {
    case GET_CATEGORIES_SUCCESS:
    return {
      byId: { ...state.byId, ...action.data.byId },
      allIds: { ...state.allIds, ...action.data.allIds}
    };
    case GET_CATEGORIES_FAIL:
    console.log(action.error);
      return { ...state, state: EState.FAIL };
    default: return state;
  }
};

export default categoriesReducer;
