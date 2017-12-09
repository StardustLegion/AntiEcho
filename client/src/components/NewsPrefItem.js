import React, { Component } from 'react';

class NewsPrefItem extends Component {

  handleClick(event) {
    event.target.classList.toggle('selected');
    this.props.handleClick(this.props.name);
  }

  render() {
    return (
      <div onClick={this.handleClick.bind(this)} id='news-pref-item'>
        <img src={this.props.image} />
        {this.props.displayName}
      </div>
    );
  }
};

export default NewsPrefItem;