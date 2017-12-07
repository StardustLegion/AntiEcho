import * as types from '../constants/actionTypes';

const initialState = {
  textValue: ''
};

const steeringReducer = (state=initialState, action) => {
  switch(action.type) {

    case types.HANDLE_SEARCH:
      return {
        ...state,
        textValue: action.payload
      };

    case types.FETCH_POSTS:
      return {
        ...state,
        isFetching: true
      };

    default:
      return state;
  }
}

export default steeringReducer;
