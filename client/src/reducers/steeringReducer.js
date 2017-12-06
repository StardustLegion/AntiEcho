import * as types from '../constants/actionTypes';

const initialState = {
  textValue: '',
  sliderValue: 0,
  isFetching: false,
};

const steeringReducer = (state=initialState, action) => {
  switch(action.type) {
    case types.SEARCH_ARTICLES:
      console.log('searching articles with tag: ', state.textValue);
      console.log('response is: ', action.payload);

      return {
        ...state,
        isFetching: false,
      };

    case types.HANDLE_SEARCH:
      return {
        ...state,
        textValue: action.payload
      };

    case types.SLIDER_CHANGE:
      return {
        ...state,
        sliderValue: action.payload
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
