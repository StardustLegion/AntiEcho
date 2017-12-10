import React, { Component } from 'react';

class Stocks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stocks: []
    };
  }

  componentDidMount() {
    const key = 'BQN0XY0H0U1BR9DE';
    const symbols = ['MSFT', 'AAPL', 'AMZN', 'FB', 'NFLX', 'TSLA'];
    symbols.forEach(sym => {
      fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${sym}&apikey=${key}`)
        .then(res => res.json()).then(data => {
          console.log(data);
          if (data['Time Series (Daily)']) {
            const key = Object.keys(data['Time Series (Daily)'])[0];
            const info = data['Time Series (Daily)'][key];
            const close = Number(info['4. close']).toFixed(2);
            const stock = data['Meta Data']['2. Symbol'];
            const string = stock + ': ' + close;
            this.setState(prevState => {
              return { stocks: [...prevState.stocks, string] };
            });
          }
        });
    });
  }

  renderStocks() {
    return this.state.stocks.map((stock, index, arr) => {
      if (index !== arr.length - 1) {
        return (
          <span className='stock-item' key={index}>
            <span>{stock}</span>
            <span style={{ margin: '0 30px' }}>|</span>
          </span>
        );
      } else {
        return <span className='stock-item' key={index}>{stock}</span>;
      }
    });
  }

  render() {
    if (this.state.stocks.length === 0) {
      return (
        <div id='stocks'>
          Loading Stocks...
        </div>
      );
    } else {
      return (
        <div id='stocks'>
          {this.renderStocks.call(this)}
        </div>
      );
    }
  }
}

export default Stocks;