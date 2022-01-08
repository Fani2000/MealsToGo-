import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import {
  Platform,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  Text,
  View,
} from 'react-native';
import RestaurantsScreen from './src/features/restaurants/screens/Restaurants.screen';

export default function App() {
  return (
    <>
      <RestaurantsScreen />
      <ExpoStatusBar style="auto" />
    </>
  );
}
