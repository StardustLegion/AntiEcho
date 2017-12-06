import React from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

const NewsFeedItem = props => {
  return (
    <div id="card">
      <Card>
        <CardHeader
          title={props.title}
          subtitle={props.source}
          actAsExpander={true}
          showExpandableButton={true}
        />
        <CardText expandable={true}>
          {props.author}
          <br />
          <a href={props.url}>{props.description}</a>
          <img src={props.urlToImage} />
        </CardText>
      </Card>
    </div>
  );
};

export default NewsFeedItem;

{/* <NewsFeedItem
  key={i}
  id={article._id}
  author={article.author}
  title={article.title}
  description={article.description}
  url={article.url}
  urlToImage={article.urlToImage}
/> */}
