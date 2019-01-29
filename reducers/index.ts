import { combineReducers, Reducer } from 'redux';
import { IAppState } from '../lib/models';
import catalogReducer from './catalogReducer';
import uiReducer from './uiReducer';
import brandsReducer from './brandReducer';
import postsReducer from './postsReducer';
import filterReducer from './filterReducer';
import printerReducer from './printerReducer';

export const reducers: Reducer<IAppState> = combineReducers<IAppState>({
  brands: brandsReducer,
  filters: filterReducer,
  posts: postsReducer,
  printers: printerReducer,
  catalog: catalogReducer,
  ui: uiReducer,
});
