import React, { Component } from 'react';

class NewsPrefItem extends Component {
  render() {
    return (
      <div id='news-pref-item' className={this.props.index === 3 ? 'selected' : 'not-selected'}>
        <img src={this.props.image} />
        {this.props.name}
      </div>
    );
  }
};

export default NewsPrefItem;