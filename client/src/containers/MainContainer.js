import React, { Component } from 'react';
import { connect } from 'react-redux';
import NewsContainer from './NewsContainer';
import SteeringContainer from './SteeringContainer';

class MainContainer extends Component {
  render() {
    return (
      <div>
        <h1>MAIN CONTAINER</h1>
        <SteeringContainer />
        <NewsContainer />
      </div>
    );
  };
};

export default MainContainer;
