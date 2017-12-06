import * as types from '../constants/actionTypes';
// const request = require('request');

export const searchArticles = (response) => ({
  type: types.SEARCH_ARTICLES,
  payload: response,
});

export const handleSearch = (value) => ({
  type: types.HANDLE_SEARCH,
  payload: value,
});

export const sliderChange = (value) => ({
  type: types.SLIDER_CHANGE,
  payload: value,
});

// export const onSubmit = () => {//action informing reducers that request began
//   console.log('onsubmit triggered')
//   console.log('getting here')
//   return function(dispatch) {
//
//     return fetch(`localhost:3000/api/articles`, {
//       method: 'POST',
//       headers: {
//         'Accept': 'application/json',
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({q: 'trump'})
//     })
//       .then(response => response.json())
//       .then(json => dispatch(searchArticles(json)))
//     // const { textValue } = getState()
//   }
//
// }

export function onSubmit() {
  return function (dispatch, getState) {
    const stateText = getState().steering.textValue;
    const request = new Request(`http://localhost:3000/api/articles/?q=${stateText}`);
    return fetch(request)
      .then(response => response.json())
      .then(json => dispatch(searchArticles(json)))
      .catch(err => {
        console.log(err);
      })
  }
}

export const fetchPosts = () => ({
  type: types.FETCH_POSTS,
})


// request.post('/api/articles', (err, res, body) => {
//   if (err) return console.error('failed request: ', err)
//   console.log('request success! ', body);
//   dispatch(searchArticles(body));
// }
//   request.post('/api/articles', { q: textValue }).then(
//     body => dispatch(searchArticles(body)),
//     error => dispatch(() => console.log(error))
//   )
// }


    //have fetch call to node server, once you get sucessful response, dispatch searchArticles
