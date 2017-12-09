import React, { Component } from 'react';
import MainContainer from './containers/MainContainer';
import ProfileContainer from './containers/ProfileContainer';
import { BrowserRouter, Route } from 'react-router-dom';
import style from '../style/style.css';
import Nav from './components/Nav';
import Header from './components/Header';
import * as actions from './actions/actions';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  steering: state.steering
});

const mapDispatchToProps = actions;

class App extends Component {

  render() {
    return (
      <div style={{textAlign: 'center'}}>
        <BrowserRouter>
          <div>
            <Header
              steering={this.props.steering}
              onSubmit={this.props.onSubmit}
              handleSearch={this.props.handleSearch}
              handleKeyPress={this.props.handleKeyPress}
            />
            <Nav />
            <Route exact path='/' component={MainContainer} />
            <Route exact path='/edit' component={ProfileContainer} />
          </div>
        </BrowserRouter>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);