import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import MapScreen from '../../features/screens/Map.screen';
import SettingScreen from '../../features/screens/Setting.screen';
import RestaurantNavigator from './restaurants.navigator';

const Tabs = createBottomTabNavigator();

const TAB_ICON = {
  RestaurantsNavigator: 'md-restaurant',
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

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Tabs.Navigator screenOptions={screenOptions}>
        <Tabs.Screen
          name="RestaurantsNavigator"
          component={RestaurantNavigator}
        />
        <Tabs.Screen name="Maps" component={MapScreen} />
        <Tabs.Screen name="Settings" component={SettingScreen} />
      </Tabs.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;