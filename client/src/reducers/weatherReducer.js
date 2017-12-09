import * as types from '../constants/actionTypes';

export default (state=null, action) => {
  console.log(action.payload);
  switch (action.type) {
    case types.SEND_WEATHER:
      return { ...state, ...action.payload };
  }
  return state;
}