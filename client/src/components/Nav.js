import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Github from './Github';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  login: state.main.userLogin,
  avatar: state.main.userAvatar
});

class Nav extends Component {
  render() {
    return (
      <div id="headerContainer">
        <div>
          <p><Link to='/' id="header-text">The Spectrum Report</Link></p>
        </div>
        <div id='profile-header'>
          <span className='header-item'><Link to='/edit'>Edit Preferences</Link></span>
          <span className='header-item' style={{color: 'lightgrey'}}>|</span>
          <span className='header-item'><Github login={this.props.login} avatar={this.props.avatar} getUserData={this.props.getUserData} /></span>
          <span className='header-item' style={{ color: 'lightgrey' }}>|</span>
          <span className='header-item'><a href='/logout'>Log Out</a></span>
        </div>
      </div>
    );
  }
};

export default connect(mapStateToProps)(Nav);