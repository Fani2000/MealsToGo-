import { View, Text } from 'react-native';
import React from 'react';
import { useRoute } from '@react-navigation/native';
import RestaurentInfo from '../restaurants/components/Restaurants-info';

const RestaurantsDetailsScreen = () => {
  const route = useRoute();
  const { restaurant } = route.params;

  return (
    <View>
      <RestaurentInfo restaurant={restaurant} />
    </View>
  );
};

export default RestaurantsDetailsScreen;
