import React, { Component } from 'react';
import NewsPrefItem from '../components/NewsPrefItem';

class ProfileContainer extends Component {

  renderItems() {
    const sources = [
      {
        name: 'Breitbart News',
        image: 'http://www.breitbart.com/apple-touch-icon-152x152.png'
      },
      {
        name: 'Fox News',
        image: 'http://global.fncstatic.com/static/orion/styles/img/fox-news/favicons/apple-touch-icon-120x120.png'
      },
      {
        name: 'Newsweek',
        image: 'http://s.newsweek.com/sites/www.newsweek.com/themes/newsweek/favicons/apple-touch-icon-120x120.png'
      },
      {
        name: 'ABC News',
        image: 'http://a.abcnews.com/assets/images/apple-touch-icons/touch-icon-ipad-retina.png'
      },
      {
        name: 'The Wall Street Journal',
        image: 'https://www.wsj.com/apple-touch-icon-precomposed.png'
      },
      {
        name: 'The Economist',
        image: 'https://icons.better-idea.org/lettericons/E-120-e3120b.png'
      },
      {
        name: 'CNN',
        image: 'http://cdn.cnn.com/cnn/.e/img/3.0/global/misc/apple-touch-icon.png'
      },
      {
        name: 'The New York Times',
        image: 'https://mobile.nytimes.com/vi-assets/static/apple-touch-icon-319373aaf4524d94d38aa599c56b8655.png'
      },
      {
        name: 'NBC News',
        image: 'https://www.nbcnews.com/apple-touch-icon-precomposed.png'
      },
      {
        name: 'The Huffington Post',
        image: 'https://icons.better-idea.org/lettericons/H-120-0dbc96.png'
      }
    ];

    return sources.map((source, index) => {
      return <NewsPrefItem key={index} name={source.name} image={source.image} index={index} />
    });
  }

  render() {

    return (
      <div className='container'>
        <h3>Choose your favorite news sources.</h3>
        <div id='profile-container'>
          {this.renderItems()}
        </div>
      </div>
    );
  }
};

export default ProfileContainer;