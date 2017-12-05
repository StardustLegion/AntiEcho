import * as types from '../constants/actionTypes';

const initialState = {
  textValue: '',
};

const steeringReducer = (state=initialState, action) => {
  switch(action.type) {
    case types.SEARCH_ARTICLES:
      console.log('searching articles with tag: ', state.textValue);

      return {
        ...state,
      };

    case types.HANDLE_SEARCH:
      return {
        ...state,
        textValue: action.payload
      };

    default:
      return state;
  }
}

export default steeringReducer;
