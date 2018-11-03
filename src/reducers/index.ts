import { combineReducers, Reducer } from 'redux';
import { IAppState } from '../lib/models';
import productReducer from './productReducer';
import uiReducer from './uiReducer';
import brandsReducer from './brandReducer';
import postsReducer from './postsReducer';

export const reducers: Reducer<IAppState> = combineReducers<IAppState>({
  brands: brandsReducer,
  posts: postsReducer,
  products: productReducer,
  ui: uiReducer,
});
