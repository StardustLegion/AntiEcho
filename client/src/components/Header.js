import React, { Component } from 'react';
import Search from './Search';
import Time from './Time';
import Weather from './Weather';
import moment from 'moment';

class Header extends Component {

  render() {
    return (
      <div id='header-container'>
        <div id='header'>
          <div className='header-item'>
            <Search
              steering={this.props.steering}
              onSubmit={this.props.onSubmit}
              handleSearch={this.props.handleSearch}
              handleKeyPress={this.props.handleKeyPress}
            />
          </div>
          <div className='header-item'>
            <Weather />
          </div>
          <div className='header-item'>
            <Time />
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
