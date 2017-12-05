import { combineReducers } from 'redux';
import steeringReducer from './steeringReducer';

const reducers = combineReducers({
  // news: newsReducer,
  steering: steeringReducer,
});

export default reducers;
