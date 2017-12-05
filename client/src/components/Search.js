import React from 'react';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';

const Search = props => {
  return (
    <div>
      <TextField
        id="search-field"
        value={props.steering.textValue}
        onChange={e => props.handleSearch(e.target.value)}
        hintText="Hint Text" />
      <br />
      <FlatButton
        id="search-button"
        onClick={(e) => props.searchArticles()}
        label="Search"
        primary={true} />
    </div>
  );
};

export default Search;
