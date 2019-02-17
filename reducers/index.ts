import { combineReducers, Reducer } from 'redux';
import { IAppState } from '../lib/models';
import categoriesReducer from './categoriesReducer';
import filtersReducer from './filtersReducer';
import postsReducer from './postsReducer';
import productsReducer from './productsReducer';
import searchReducer from './searchReducer';
import sortingReducer from './sortingReducer';

export const reducers: Reducer<IAppState> = combineReducers<IAppState>({
  categories: categoriesReducer,
  filters: filtersReducer,
  posts: postsReducer,
  products: productsReducer,
  search: searchReducer,
  sorting: sortingReducer,
});
