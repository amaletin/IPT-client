import { Reducer } from 'redux';
import {
  GET_CATEGORIES_FAIL,
  GET_CATEGORIES_SUCCESS,
} from '../actions/categoriesActions';
import { EState } from '../lib/enums';
import { ICategoriesState } from '../lib/models';

const initialState: ICategoriesState = {
  allIds: [],
  byId: {},
};

const categoriesReducer: Reducer<ICategoriesState> = (state = initialState, action) => {
  switch (action.type) {
    case GET_CATEGORIES_SUCCESS:
      return {
        allIds: { ...state.allIds, ...action.data.allIds},
        byId: { ...state.byId, ...action.data.byId },
      };
    case GET_CATEGORIES_FAIL:
      console.log(action.error); // tslint:disable-line no-console
      return { ...state, state: EState.FAIL };
    default: return state;
  }
};

export default categoriesReducer;
