import keyBy from 'lodash/keyBy';
import { Reducer } from 'redux';
import {
  GET_CATEGORIES_START,
  GET_CATEGORIES_SUCCESS,
  GET_CATEGORIES_FAIL
} from '../actions/categoriesActions';
import { EState } from '../lib/enums';
import { ICategoriesState } from '../lib/models';
import { processCategories } from '../lib/dataUtils';

const initialState:ICategoriesState = {
  categories: [],
};

const categoriesReducer: Reducer<ICategoriesState> = (state = initialState, action) => {
  switch (action.type) {
    case GET_CATEGORIES_START:
      return { ...state, state: EState.FETCHING };
    case GET_CATEGORIES_SUCCESS:
      const categories = keyBy(processCategories(action.data), 'id');
      return {
        ...state,
        categories: { ...state.categories, ...categories },
        state: EState.SUCCESS,
      };
    case GET_CATEGORIES_FAIL:
      console.log(action.error);
      return { ...state, state: EState.FAIL };
    default: return state;
  }
};

export default categoriesReducer;
