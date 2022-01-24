import React from 'react';
import { Text } from '../components/typography/text-component';
import styled from 'styled-components/native';
import { Platform } from 'react-native';

const CompactImage = styled.Image`
  border-radius: 10px;
  width: 120px;
  height: 100px;
`;

const CompactWebViewImage = styled.Image`
  border-radius: 10px;
  width: 120px;
  height: 100px;
`;

const Item = styled.View`
  padding: 10px;
  max-width: 120px;
  align-items: center;
`;

const isAndroid = Platform.OS === 'android';

const CompactRestaurantInfo = ({ restaurant }) => {
  const Image = isAndroid ? CompactWebViewImage : CompactImage;
  return (
    <Item>
      <Image source={{ uri: restaurant.photos[0] }} />
      <Text center variant="caption" numberOfLines={3}>
        {restaurant.name}
      </Text>
    </Item>
  );
};

export default CompactRestaurantInfo;
