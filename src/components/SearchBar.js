import React, { useState } from 'react';
import { Searchbar } from 'react-native-paper';
import styled from 'styled-components/native';

const Container = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const searchQueryhandler = (query) => {
    setSearchQuery(query);
  };

  return (
    <Container>
      <Searchbar
        placeholder="Seach"
        value={searchQuery}
        onChangeText={searchQueryhandler}
      />
    </Container>
  );
};

export default SearchBar;
