import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import { IAppState } from '../lib/models';
import { reducers } from '../reducers/index';

export default (initialStore?: IAppState) => createStore(
  reducers,
  initialStore,
  composeWithDevTools(applyMiddleware(thunkMiddleware)),
);
