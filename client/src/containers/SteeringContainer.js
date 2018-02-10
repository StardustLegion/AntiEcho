import React, { Component } from 'react';
import { connect } from 'react-redux';
import PoliticalSlider from '../components/PoliticalSlider';
import * as actions from '../actions/actions';
// import { bindActionCreators } from 'redux'; //refactor to use bindActionCreators

const mapDispatchToProps = actions;

class SteeringContainer extends Component {
  render() {
    return (
      <div style={{width: '100%'}}>
        <PoliticalSlider sliderValue={this.props.sliderValue} sliderChange={this.props.sliderChange} filterArticles={this.props.filterArticles} />
      </div>
    );
  };
};

export default connect(null, mapDispatchToProps)(SteeringContainer);
