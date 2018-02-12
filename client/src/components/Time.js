import React, { Component } from 'react';
import moment from 'moment';

class Time extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: moment().format('llll')
    };
  }

  componentDidMount() {
    setInterval(() => this.setState({ time: moment().format('llll') }), 1000);
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
