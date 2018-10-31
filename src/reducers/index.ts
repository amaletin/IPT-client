import { combineReducers, Reducer } from 'redux';
import { IAppState } from '../lib/models';
import productReducer from './productReducer';
import uiReducer from './uiReducer';
import brandsReducer from './brandReducer';

export const reducers: Reducer<IAppState> = combineReducers<IAppState>({
  brands: brandsReducer,
  products: productReducer,
  ui: uiReducer,
});
