import React from 'react';
import { Text, View } from 'react-native';
import { Card } from 'react-native-paper';
import styled from 'styled-components/native';

const Container = styled.View`
  background-color: blue;
  flex: 1;
  padding: 10px;
`;

const CardContainer = styled(Card)`
  background-color: white;
`;

const Cover = styled(Card.Cover)`
  padding: 20px;
  background-color: white;
`;

const Title = styled.Text`
  padding: 10px 20px;
`;

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
    <Container>
      <CardContainer elevation={5}>
        <Cover key={name} source={{ uri: photos[0] }} />
        <Title>{name}</Title>
      </CardContainer>
    </Container>
  );
};

export default RestaurentInfo;
