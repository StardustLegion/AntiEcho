import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  weather: state.weather
});

class Weather extends Component {
  render() {
    if (this.props.weather) {
      return (
        <div id='weather'>
          <em>{this.props.weather.city}: </em>
          {this.props.weather.current}&deg; / 
          <span style={{ fontWeight: '800' }}> H:</span> {this.props.weather.high}&deg; / 
          <span style={{ fontWeight: '800' }}> L:</span> {this.props.weather.low}&deg;
        </div>
      );
    } else {
      return (
        <div id='weather'>
          Loading Weather...
        </div>
      );
    }
  }
}

export default connect(mapStateToProps)(Weather);