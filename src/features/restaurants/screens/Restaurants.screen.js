import * as React from 'react';
import { StatusBar as ExpoStatusBar } from 'expo';
import { Platform, SafeAreaView, StyleSheet } from 'react-native';
import SearchBar from '../../../components/SearchBar';
import RestaurentInfo from '../components/Restaurants-info';
import styled from 'styled-components/native';

const isAndroid = Platform.OS === 'android' ? StatusBar.currentHeight : 0;

const SafeAreaViewContainer = styled(SafeAreaView)`
  flex: 1;
  margin-top: ${isAndroid}px;
`;

export default function RestaurantsScreen() {
  return (
    <SafeAreaViewContainer>
      <SearchBar />
      <RestaurentInfo />
    </SafeAreaViewContainer>
  );
}
