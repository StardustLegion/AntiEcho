import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';
import PoliticalSlider from '../components/PoliticalSlider';
import * as actions from '../actions/actions';
// import { bindActionCreators } from 'redux'; //refactor to use bindActionCreators

const mapStateToProps = state => ({
  // add pertinent state here
  steering: state.steering,
});

const mapDispatchToProps = actions;

class SteeringContainer extends Component {
  render() {
    return (
      <div>
        <h3>STEERING CONTAINER</h3>
        <Header
          steering={this.props.steering}
          onSubmit={this.props.onSubmit}
          handleSearch={this.props.handleSearch}
        />
        <PoliticalSlider sliderValue={this.props.steering.sliderValue} sliderChange={this.props.sliderChange} />
      </div>
    );
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SteeringContainer);
