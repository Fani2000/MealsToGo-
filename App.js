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

const Tabs = createBottomTabNavigator();

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
        <NavigationContainer>
          <Tabs.Navigator
            screenOptions={({ route }) => ({
              headerShown: false,
              tabBarIcon: ({ focused, color, size }) => {
                switch (route.name) {
                  case 'Restaurants':
                    return (
                      <Ionicons
                        name="md-restaurant"
                        size={size}
                        color={color}
                      />
                    );
                  case 'Settings':
                    return (
                      <Ionicons name="md-settings" size={size} color={color} />
                    );
                  case 'Maps':
                    return <Ionicons name="md-map" size={size} color={color} />;
                }
              },
              tabBarActiveTintColor: 'tomato',
              tabBarInactiveTintColor: 'gray',
            })}
          >
            <Tabs.Screen name="Restaurants" component={RestaurantsScreen} />
            <Tabs.Screen name="Maps" component={MapScreen} />
            <Tabs.Screen name="Settings" component={SettingScreen} />
          </Tabs.Navigator>
        </NavigationContainer>
        <ExpoStatusBar style="auto" />
      </ThemeProvider>
    </>
  );
}
