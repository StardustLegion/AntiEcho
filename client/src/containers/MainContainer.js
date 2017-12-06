import React, { Component } from 'react';
import { connect } from 'react-redux';
import NewsContainer from './NewsContainer';
import SteeringContainer from './SteeringContainer';
import * as actions from '../actions/actions';

const mapStateToProps = state => ({
  main: state.main
})

const mapDispatchToProps = actions;

class MainContainer extends Component {
  render() {
    return (
      <div>
        <h1>MAIN CONTAINER</h1>
        <SteeringContainer />
        <NewsContainer main={this.props.main} />
      </div>
    );
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);
