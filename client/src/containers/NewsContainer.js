import React, { Component } from 'react';
import { connect } from 'react-redux';
import NewsFeedItem from '../components/NewsFeedItem';

class NewsContainer extends Component {
  render() {
    return (
      <div>
        <h3>NEWS CONTAINER</h3>
        <NewsFeedItem />
      </div>
    );
  };

};

export default NewsContainer;
