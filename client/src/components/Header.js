import React, { Component } from 'react';
import Search from './Search';
import Time from './Time';
import moment from 'moment';

class Header extends Component {

  render() {
    return (
      <div id='header'>
        <Search
          steering={this.props.steering}
          onSubmit={this.props.onSubmit}
          handleSearch={this.props.handleSearch}
          handleKeyPress={this.props.handleKeyPress}
        />
        <Time />
      </div>
    );
  }
}

export default Header;
