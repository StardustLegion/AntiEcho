import React, { Component } from 'react';
import { connect } from 'react-redux';
import NewsContainer from './NewsContainer';
import SteeringContainer from './SteeringContainer';
import * as actions from '../actions/actions';

const mapStateToProps = state => ({
  main: state.main,
  onLoad: state.onLoad,
})

const mapDispatchToProps = actions;

class MainContainer extends Component {

  componentDidMount(){
    this.props.onLoad();
  }

  render() {
    return (
      <div>
        <div onClick={this.props.onLoad}>
          <p id="header">The Spectrum Report</p>
        </div>
        <SteeringContainer />
        <NewsContainer main={this.props.main} />
      </div>
    );
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);
