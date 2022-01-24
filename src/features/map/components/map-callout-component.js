import { View, Text } from 'react-native';
import React from 'react';
import styled from 'styled-components/native';
import CompactRestaurantInfo from '../../../components/CompactRestaurantInfo';

const MapCallout = ({ restaurant }) => {
  return <CompactRestaurantInfo restaurant={restaurant} />;
};

export default MapCallout;
