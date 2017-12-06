import React from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

const NewsFeedItem = props => {
  return (
    <div>
      <Card>
        <CardHeader
          title={props.title}
          subtitle={props.author}
          actAsExpander={true}
          showExpandableButton={true}
        />
        {/* <CardActions>
          <FlatButton label="Action1" />
          <FlatButton label="Action2" />
        </CardActions> */}
        <CardText expandable={true}>
          <img src={props.urlToImage} />
          {props.description}
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
