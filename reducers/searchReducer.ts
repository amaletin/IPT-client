import { Reducer } from 'redux';
import { RESET_SEARCH, SEARCH_PRODUCTS_SUCCESS, SET_SEARCH_STRING } from '../actions/searchActions';
import { ISearchState } from '../lib/models';

const initialState: ISearchState = {
  foundIds: [],
  searchString: '',
};

const searchReducer: Reducer<ISearchState> = (state = initialState, action) => {
  switch (action.type) {
    case SET_SEARCH_STRING:
      return {
        ...state,
        searchString: action.data,
      };
    case RESET_SEARCH:
      return initialState;
    case SEARCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        foundIds: action.data.allIds,
      };
    default: return state;
  }
};

export default searchReducer;
