import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Nav extends Component {
  render() {
    return (
      <div id="headerContainer">
        <div>
          <p><Link to='/' id="header">The Spectrum Report</Link></p>
        </div>
        <div id='profile-header'>
          <span className='header-item'><Link to='/edit'>Edit Preferences</Link></span>
          <span className='header-item'>|</span>
          <span className='header-item'>Logged in as <strong>Andrew Harris</strong></span>
          <span className='header-item'>|</span>
          <span className='header-item'><a href='/logout'>Log Out</a></span>
        </div>
      </div>
    );
  }
};

export default Nav;