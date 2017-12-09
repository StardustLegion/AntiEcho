import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import store from './store';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

const muiTheme = getMuiTheme({
  slider: {
    trackColor: 'rgba(0,0,0,0)',
    trackColorSelected: 'rgba(0,0,0,0)',
    selectionColor: 'rgba(0,0,0,0)',
    rippleColor: 'rgba(0,0,0,0)',
    handleSize: 30,
    handleFillColor: 'rgba(0,0,0,0)',
    handleColorZero: 'rgba(0,0,0,0)'
  },
});

render(
  <Provider store={store}>
    <MuiThemeProvider muiTheme={muiTheme}>
      <App />
    </MuiThemeProvider>
  </Provider>
  ,document.getElementById('app'),
);
