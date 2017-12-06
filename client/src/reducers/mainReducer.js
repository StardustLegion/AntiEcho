import * as types from '../constants/actionTypes';

let feedList = [];

const initialState = {
  isFetching: false,
  feedList: feedList,
};

const mainReducer = (state=initialState, action) => {
  switch(action.type) {
    case types.SEARCH_ARTICLES:
      console.log('response is: ', action.payload);
      if (action.payload.length === 0) feedList = [];
      else feedList = action.payload[0].articles;

      return {
        ...state,
        isFetching: false,
        feedList: feedList
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

export default mainReducer;
