import React from 'react';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';

const Search = props => {
  return (
    <div id="search-field">
      <TextField
        value={props.steering.textValue}
        onChange={e => props.handleSearch(e.target.value)}
        onKeyPress={(e) => props.handleKeyPress(e)}
        hintText="Search here for news" />
      <br />
    </div>
  );
};

export default Search;