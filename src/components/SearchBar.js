import React, { useState } from 'react';
import { Searchbar } from 'react-native-paper';

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const searchQueryhandler = (query) => {
    setSearchQuery(query);
  };

  return (
    <Searchbar
      placeholder="Seach"
      value={searchQuery}
      onChangeText={searchQueryhandler}
    />
  );
};

export default SearchBar;
