import * as React from 'react';
import { StatusBar as ExpoStatusBar } from 'expo';
import { FlatList, Platform, SafeAreaView, StyleSheet } from 'react-native';
import SearchBar from '../../../components/SearchBar';
import RestaurentInfo from '../components/Restaurants-info';
import styled from 'styled-components/native';

const isAndroid = Platform.OS === 'android' ? StatusBar.currentHeight : 0;

const SafeAreaViewContainer = styled(SafeAreaView)`
  flex: 1;
  margin-top: ${isAndroid}px;
`;

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
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
