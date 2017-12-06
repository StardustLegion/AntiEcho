import React from 'react';

const NewsFeedItem = props => {
  return (
    <div>
      NEWSFEEDITEM
      <a href={props.url}>{props.title}</a>
      {props.description}
    </div>
  );
};

export default NewsFeedItem;

// import React from 'react';
// import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
// import FlatButton from 'material-ui/FlatButton';
//
// const CardExampleExpandable = () => (
//   <Card>
//     <CardHeader
//       title="Without Avatar"
//       subtitle="Subtitle"
//       actAsExpander={true}
//       showExpandableButton={true}
//     />
//     <CardActions>
//       <FlatButton label="Action1" />
//       <FlatButton label="Action2" />
//     </CardActions>
//     <CardText expandable={true}>
//       Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//       Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
//       Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
//       Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
//     </CardText>
//   </Card>
// );

// export default CardExampleExpandable;

{/* <NewsFeedItem
  key={i}
  id={article._id}
  author={article.author}
  title={article.title}
  description={article.description}
  url={article.url}
  urlToImage={article.urlToImage}
/> */}
