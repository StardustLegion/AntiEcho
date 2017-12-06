import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from './reducers/index';
import thunkMiddleware from 'redux-thunk';

const loggerMiddleware = createLogger();

const store = createStore(
<<<<<<< HEAD
    reducers,
    composeWithDevTools(),
    applyMiddleware(
        thunkMiddleware,
    ),
=======
  reducers,
  composeWithDevTools(),
  applyMiddleware(
    thunkMiddleware
  ),
>>>>>>> 79e67eeeb24e9811098a0783b3d97fede257ce26

);

export default store;