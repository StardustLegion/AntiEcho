import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';
import Slider from '../components/Slider';

class SteeringContainer extends Component {
  render() {
    return (
      <div>
        <h3>STEERING CONTAINER</h3>
        <Header />
        <Slider />
      </div>
    );
  };
};

export default SteeringContainer;
