import React from 'react';
import Search from './Search';

const Header = props => {
  return (
    <div>
      HEADER
      <Search
        steering = {props.steering}
        searchArticles = {props.searchArticles}
        handleSearch = {props.handleSearch}
      />
    </div>
  );
};

export default Header;
