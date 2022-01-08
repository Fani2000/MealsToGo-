import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Card from './Card';

const RestaurentInfo = ({ restaurant = {} }) => {
  const {
    name = 'Some Restaurant',
    icon,
    photos = [
      'https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-684x1024.jpg.webp',
    ],
    address = '100 some random street',
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily,
  } = restaurant;

  return (
    <View style={styles.reasturantContainer}>
      <Card title={name} photo={photos[0]} />
    </View>
  );
};

const styles = StyleSheet.create({
  reasturantContainer: {
    backgroundColor: 'blue',
    flex: 1,
    padding: 10,
  },
});

export default RestaurentInfo;
