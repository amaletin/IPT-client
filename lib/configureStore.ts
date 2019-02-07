import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import { reducers } from '../reducers/index';
import { IAppState } from './models';

export default (initialStore?: IAppState) => createStore(
  reducers,
  initialStore,
  composeWithDevTools(applyMiddleware(thunkMiddleware)),
);
