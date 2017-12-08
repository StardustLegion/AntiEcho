import React, { Component } from 'react';
import MainContainer from './containers/MainContainer';
import ProfileContainer from './containers/ProfileContainer';
import { BrowserRouter, Route } from 'react-router-dom';
import style from '../style/style.css';

class App extends Component {

  render() {
    return (
      <div style={{textAlign: 'center'}}>
        <BrowserRouter>
          <div>
            <Route exact path='/' component={MainContainer} />
            <Route exact path='/edit' component={ProfileContainer} />
          </div>
        </BrowserRouter>
      </div>
    )
  }
}

export default App;
