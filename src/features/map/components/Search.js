import styled from 'styled-components/native';
import React, { useContext, useEffect, useState } from 'react';
import { LocationContext } from '../../../services/location/location.context';
import { Searchbar } from 'react-native-paper';

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
  position: absolute;
  z-index: 999;
  top: 20px;
  width: 100%;
`;

const Search = () => {
  const { keyword, search } = useContext(LocationContext);
  const [searchkeyword, setSearchKeyword] = useState(keyword);

  useEffect(() => {
    setSearchKeyword(keyword);
  }, [keyword]);

  return (
    <SearchContainer>
      <Searchbar
        placeholder="Search for a location"
        icon="map"
        value={searchkeyword}
        onSubmitEditing={() => {
          search(searchkeyword);
        }}
        onChangeText={(text) => {
          setSearchKeyword(text);
        }}
      />
    </SearchContainer>
  );
};

export default Search;
