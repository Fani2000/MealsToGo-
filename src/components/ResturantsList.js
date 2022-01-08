import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const ResturantsList = () => {
  return (
    <View style={styles.reasturantContainer}>
      <Text>List</Text>
    </View>
  );
};

export default ResturantsList;

const styles = StyleSheet.create({
  reasturantContainer: {
    backgroundColor: 'blue',
    flex: 1,
    padding: 10,
  },
});
