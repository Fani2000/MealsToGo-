import * as React from 'react';
import { StatusBar as ExpoStatusBar } from 'expo';
import { Platform, SafeAreaView, StyleSheet } from 'react-native';
import SearchBar from '../../../components/SearchBar';
import RestaurentInfo from '../components/Restaurants-info';

const isAndroid = Platform.OS === 'android' ? StatusBar.currentHeight : 0;

export default function RestaurantsScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <SearchBar />
      <RestaurentInfo />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: isAndroid,
  },
});
