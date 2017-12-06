import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from './reducers/index';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';

const loggerMiddleware = createLogger();

const store = createStore(
  reducers,
  composeWithDevTools(),
  applyMiddleware(
    thunkMiddleware,
    loggerMiddleware
  ),

);

export default store;
