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
        onKeyPress={(e) => props.handleKeyPress(e)}
        hintText="Hint Text" />
      <br />
      <FlatButton
        id="search-button"
        onClick={props.onSubmit}
        label="Search"
        primary={true} />
    </div>
  );
};

export default Search;
