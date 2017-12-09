import React, { Component } from 'react';
import moment from 'moment';

class Time extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: moment().format('MMMM Do YYYY, h:mm:ss a')
    };
  }

  componentDidMount() {
    setInterval(() => this.setState({ time: moment().format('MMMM Do YYYY, h:mm:ss a') }), 1000);
  }

  render() {
    return (
      <div>
        {this.state.time}
      </div>
    );
  }
}

export default Time;
