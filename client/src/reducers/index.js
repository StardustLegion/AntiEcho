import { combineReducers } from 'redux';
import steeringReducer from './steeringReducer';
import mainReducer from './mainReducer';
import weatherReducer from './weatherReducer';

const reducers = combineReducers({
  main: mainReducer,
  steering: steeringReducer,
  weather: weatherReducer
});

export default reducers;
