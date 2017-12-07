import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

const NewsFeedItem = props => {
  return (
    <div id="card"><a href={props.url}>
      <Card style={{
        width: '100%'
      }}>
    <CardHeader
      title={props.title}
      subtitle={props.source}
      titleStyle={{
        fontSize: '18px',
      }}
      textStyle={{paddingRight: '0px'}}
    />
    <CardMedia>
      <img src={props.urlToImage} alt="" />
    </CardMedia>
    <CardTitle
      // title={props.source} subtitle={props.author}
    />
    <CardText>
      {props.description}
    </CardText>
  </Card>
      {/* <Card>
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
      </Card> */}
    </a>
    </div>
  );
};

export default NewsFeedItem;

// {/* <NewsFeedItem
//   key={i}
//   id={article._id}
//   author={article.author}
//   title={article.title}
//   description={article.description}
//   url={article.url}
//   urlToImage={article.urlToImage}
// /> */}
