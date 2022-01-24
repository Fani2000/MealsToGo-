import { View, Text } from 'react-native';
import React from 'react';
import {
  createStackNavigator,
  TransitionPresets,
} from '@react-navigation/stack';

import RestaurantsScreen from '../../features/restaurants/screens/Restaurants.screen';
import RestaurantsDetailsScreen from '../../features/restaurants/screens/RestaurantsDetails.screen';

const RestaurantStack = createStackNavigator();

const RestaurantNavigator = () => {
  return (
    <RestaurantStack.Navigator
      screenOptions={{
        headerShown: false,
        ...TransitionPresets.ModalPresentationIOS,
      }}
    >
      <RestaurantStack.Screen
        name="Restaurants"
        component={RestaurantsScreen}
      />
      <RestaurantStack.Screen
        name="RestaurantsDetails"
        component={RestaurantsDetailsScreen}
      />
    </RestaurantStack.Navigator>
  );
};

export default RestaurantNavigator;
