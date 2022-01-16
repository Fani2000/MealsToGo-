import * as React from 'react';
import { StatusBar as ExpoStatusBar } from 'expo';
import { FlatList } from 'react-native';
import SearchBar from '../../../components/SearchBar';
import RestaurentInfo from '../components/Restaurants-info';
import styled from 'styled-components/native';
import { SafeAreaViewContainer } from '../../../components/Safe-area-component.js/safe-area-component';

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]} ${(props) => props.theme.space[2]};
`;

const DATA = [
  { id: 1 },
  { id: 2 },
  { id: 3 },
  { id: 4 },
  { id: 5 },
  { id: 6 },
  { id: 7 },
];

export default function RestaurantsScreen() {
  return (
    <SafeAreaViewContainer>
      <SearchContainer>
        <SearchBar />
      </SearchContainer>
      <FlatList
        data={DATA}
        renderItem={() => <RestaurentInfo />}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ padding: 4 }}
      />
    </SafeAreaViewContainer>
  );
}
