import React, { Component } from 'react';

class Github extends Component {

  componentDidMount() {
    this.props.getUserData();
  }

  render() {
    console.log('from github', this.props);
    if (this.props.login) {
      return (
        <div id="github">
          <img src={this.props.avatar} />
          Hello {this.props.login}
        </div>
      );
    } else {
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
}

export default Github;