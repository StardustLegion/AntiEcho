import { combineReducers } from 'redux';
import steeringReducer from './steeringReducer';
import mainReducer from './mainReducer';

const reducers = combineReducers({
  main: mainReducer,
  steering: steeringReducer,
});

export default reducers;
