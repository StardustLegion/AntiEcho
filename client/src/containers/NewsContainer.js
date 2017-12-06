import React, { Component } from 'react';
import { connect } from 'react-redux';
import NewsFeedItem from '../components/NewsFeedItem';
import * as actions from '../actions/actions';

const mapStateToProps = state => ({
  main: state.main
});

const mapDispatchToProps = actions;

class NewsContainer extends Component {
  render() {
    console.log('this.props.main.febbedList is: ', this.props.main.feedList)
    const newsFeedItemArr = this.props.main.feedList.map((article) => {
      console.log('NewsFeedItem', article);
    });
    return (
      <div>
        <h3>NEWS CONTAINER</h3>
        {newsFeedItemArr}
        {/* <NewsFeedItem main={this.props.main} /> */}
      </div>
    );
  };

};

export default connect(mapStateToProps, mapDispatchToProps)(NewsContainer);
