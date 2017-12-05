import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';
import Slider from '../components/Slider';
import * as actions from '../actions/actions';
// import { bindActionCreators } from 'redux'; //refactor to use bindActionCreators

const mapStateToProps = state => ({
  // add pertinent state here
  steering: state.steering,
});

const mapDispatchToProps = dispatch => ({//refactor to use bindActionCreators
  // return bindActionCreators({
  //   searchArticles: actions.searchArticles,
  // }, dispatch)
  searchArticles: searchString => dispatch(actions.searchArticles(searchString)),
  handleSearch: value => dispatch(actions.handleSearch(value))
});

class SteeringContainer extends Component {
  render() {
    return (
      <div>
        <h3>STEERING CONTAINER</h3>
        <Header
          steering={this.props.steering}
          searchArticles={this.props.searchArticles}
          handleSearch={this.props.handleSearch}
        />
        <Slider />
      </div>
    );
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SteeringContainer);
