import styled from 'styled-components/native';
import React, { useContext, useEffect, useState } from 'react';
import { LocationContext } from '../../../services/location/location.context';
import { Searchbar } from 'react-native-paper';

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]} ${(props) => props.theme.space[2]};
`;
const Search = ({ isFavouritesToggled, onFavouritesToggled }) => {
  const { keyword, search } = useContext(LocationContext);
  const [searchkeyword, setSearchKeyword] = useState(keyword);

  useEffect(() => {
    setSearchKeyword(keyword);
  }, [keyword]);

  return (
    <SearchContainer>
      <Searchbar
        icon={isFavouritesToggled ? 'heart' : 'heart-outline'}
        onIconPress={onFavouritesToggled}
        placeholder="Search for a location"
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
