import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import {
  Platform,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  Text,
  View,
} from 'react-native';
import ResturantsList from './src/components/ResturantsList';
import SearchBar from './src/components/SearchBar';

const isAndroid = Platform.OS === 'android' ? StatusBar.currentHeight : 0;

export default function App() {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <SearchBar />
        <ResturantsList />
      </SafeAreaView>
      <ExpoStatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: isAndroid,
  },
});
