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

  render() {
    return (
      <a target="_blank" href={this.props.url} className="grid-item">
        {this.renderImage()}
        <h4>{this.props.title}</h4>
        <p>{this.props.description}</p>
      </a>
    );
  }
};

export default NewsFeedItem;
