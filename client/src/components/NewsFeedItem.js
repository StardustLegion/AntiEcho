import React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import noimage from './noimage.png'; 

class NewsFeedItem extends Component {
  renderImage() {
    if (this.props.urlToImage) {
      return <img src={this.props.urlToImage} alt="" />;
    } else {
      return <img src={noimage} alt="" />;
    }
  }

  renderTitle() {
    let elipses = '';
    if (this.props.title.split('').length > 45) elipses = '...';
    const title = this.props.title.split('').filter((c, i) => i < 45).join('');
    return <h4>{title + elipses}</h4>;
  }

  render() {
    return (
      <a target="_blank" href={this.props.url} className="grid-item">
        {this.renderImage()}
        {this.renderTitle()}
        <p>{this.props.description}</p>
        <p>{this.props.source}</p>
      </a>
    );
  }
};

export default NewsFeedItem;
