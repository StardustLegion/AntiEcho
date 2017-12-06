import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from './reducers/index';
import thunkMiddleware from 'redux-thunk';

const loggerMiddleware = createLogger();

const store = createStore(
    reducers,
    composeWithDevTools(),
    applyMiddleware(
        thunkMiddleware,
    ),

);

export default store;