import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components/native';
import RestaurantsScreen from './src/features/restaurants/screens/Restaurants.screen';
import { theme } from './src/infrastructure/theme';

import {
  useFonts as useOswald,
  Oswald_400Regular,
} from '@expo-google-fonts/oswald';
import { useFonts as useLato, Lato_400Regular } from '@expo-google-fonts/lato';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import SettingScreen from './src/features/restaurants/screens/Setting.screen';
import MapScreen from './src/features/restaurants/screens/Map.screen';
import { Ionicons } from '@expo/vector-icons';
import { RestaurantProvider } from './src/services/restaurants/restaurant-context';
import { LocationProvider } from './src/services/location/location.context';

const Tabs = createBottomTabNavigator();

const TAB_ICON = {
  Restaurants: 'md-restaurant',
  Maps: 'md-map',
  Settings: 'md-settings',
};

const tabBarIcon =
  (iconName) =>
  ({ size, color }) =>
    <Ionicons name={iconName} size={size} color={color} />;

const screenOptions = ({ route }) => {
  const icon = TAB_ICON[route.name];
  return {
    tabBarIcon: tabBarIcon(icon),
    headerShown: false,
    tabBarActiveTintColor: 'tomato',
    tabBarInActiveTintColor: 'gray',
  };
};

export default function App() {
  let [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });
  let [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!latoLoaded || !oswaldLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <LocationProvider>
          <RestaurantProvider>
            <NavigationContainer>
              <Tabs.Navigator screenOptions={screenOptions}>
                <Tabs.Screen name="Restaurants" component={RestaurantsScreen} />
                <Tabs.Screen name="Maps" component={MapScreen} />
                <Tabs.Screen name="Settings" component={SettingScreen} />
              </Tabs.Navigator>
            </NavigationContainer>
            <ExpoStatusBar style="auto" />
          </RestaurantProvider>
        </LocationProvider>
      </ThemeProvider>
    </>
  );
}
