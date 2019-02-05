import { combineReducers, Reducer } from 'redux';
import { IAppState } from '../lib/models';
import filtersReducer from './filtersReducer';
import postsReducer from './postsReducer';
import productsReducer from './productsReducer';
import sortingReducer from './sortingReducer';
import categoriesReducer from './categoriesReducer';


export const reducers: Reducer<IAppState> = combineReducers<IAppState>({
  filters: filtersReducer,
  posts: postsReducer,
  products: productsReducer,
  sorting: sortingReducer,
  categories: categoriesReducer,
});
