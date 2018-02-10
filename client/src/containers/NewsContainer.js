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
    const newsFeedItemArr = this.props.main.feedList.map((article, i) => {
      return <NewsFeedItem
        key={i}
        id={article._id}
        author={article.author}
        source={article.source.name}
        title={article.title}
        description={article.description}
        url={article.url}
        urlToImage={article.urlToImage}
        publishedAt={article.publishedAt}
      />
    });
    return (
      <div className="grid">
        {newsFeedItemArr}
      </div>
    );
  };

};

export default connect(mapStateToProps, mapDispatchToProps)(NewsContainer);
