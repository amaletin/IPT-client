import { combineReducers, Reducer } from 'redux';
import { IAppState } from '../lib/models';
import catalogReducer from './catalogReducer';
import uiReducer from './uiReducer';
import brandsReducer from './brandReducer';
import postsReducer from './postsReducer';
import filterReducer from './filterReducer';

export const reducers: Reducer<IAppState> = combineReducers<IAppState>({
  brands: brandsReducer,
  filters: filterReducer,
  posts: postsReducer,
  catalog: catalogReducer,
  ui: uiReducer,
});
