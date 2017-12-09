import React, { Component } from 'react';
import NewsPrefItem from '../components/NewsPrefItem';
import sources from '../sourcesDetailed';

class ProfileContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      sources: {
        'breitbart-news': false,
        'fox-news': false,
        'newsweek': false,
        'abc-news': false,
        'the-wall-street-journal': false,
        'the-economist': false,
        'cnn': false,
        'the-new-york-times': false,
        'nbc-news': false,
        'the-huffington-post': false,
      }
    };
  }

  handleSave() {
    fetch('http://localhost:3000/api/preferences', {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(this.state.sources),
    }).then((res) => {
      console.log(res);
    });
  }

  handleClick(name) {
    this.setState(prevState => {
      if (prevState.sources[name]) {
        return { sources: { ...prevState.sources, [name]: false } };
      } else {
        return { sources: { ...prevState.sources, [name]: true } };
      }
    });
  }

  renderItems() {
    return sources.map((source, index) => {
      return <NewsPrefItem handleClick={this.handleClick.bind(this)} key={index} name={source.name} displayName={source.displayName} image={source.image} index={index} />
    });
  }

  render() {
    return (
      <div className='container'>
        <h3>Choose your favorite news sources.</h3>
        <div id='profile-container'>
          {this.renderItems()}
        </div>
        <div>
          <button onClick={this.handleSave.bind(this)} id='save-button'><i style={{color: 'green', fontSize: '1.5em'}} className="fa fa-check-circle-o" aria-hidden="true"></i> Save</button>
        </div>
      </div>
    );
  }
};

export default ProfileContainer;