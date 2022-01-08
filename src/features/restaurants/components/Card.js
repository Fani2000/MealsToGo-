import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Card as AutomaticCard } from 'react-native-paper';

const Card = ({ title, photo }) => {
  return (
    <AutomaticCard elevation={5} style={styles.card}>
      <AutomaticCard.Cover
        key={title}
        style={styles.cover}
        source={{ uri: photo }}
      />
      <Text style={styles.title}>{title}</Text>
    </AutomaticCard>
  );
};

export default Card;

const styles = StyleSheet.create({
  card: { backgroundColor: 'white' },
  cover: { padding: 20, backgroundColor: 'white' },
  title: { padding: 16 },
});
