import React, { Component } from 'react';

class Github extends Component {

  componentDidMount() {
    this.props.getUserData();
  }

  render() {
    return (
      <div id="github">
        <i className="fa fa-github fa-2x" aria-hidden="true"></i>
        <a href="https://github.com/login/oauth/authorize?scope=user:email&client_id=fed7371fef7e53360833">
          Log In with GitHub
        </a>
      </div>
    );
  }
}

export default Github;