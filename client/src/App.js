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

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition((pos) => {
      fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${pos.coords.latitude}&lon=${pos.coords.longitude}&APPID=6b20039417871aa1961f0e2af6726f78`).
        then(response => response.json()).then(data => {
          const city = data.name;
          const current = (data.main.temp * 1.8 - 459.67).toFixed();
          const high = (data.main.temp_max * 1.8 - 459.67).toFixed();
          const low = (data.main.temp_min * 1.8 - 459.67).toFixed();
          this.props.sendWeather({ city, current, high, low });
        });
    });
  }

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