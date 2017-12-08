import React, { Component } from 'react';
import { connect } from 'react-redux';
import NewsContainer from './NewsContainer';
import SteeringContainer from './SteeringContainer';
import Nav from '../components/Nav';
import * as actions from '../actions/actions';

const mapStateToProps = state => ({
  main: state.main,
});

const mapDispatchToProps = actions;

class MainContainer extends Component {

  componentDidMount(){
    this.props.onLoad();
  }

  render() {
    return (
      <div id="mainContainer" className='container'>
        <Nav />
        <SteeringContainer sliderValue={this.props.main.sliderValue} id="steeringContainer"/>
        <NewsContainer main={this.props.main} id="newsContainer"/>
      </div>
    );
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);
