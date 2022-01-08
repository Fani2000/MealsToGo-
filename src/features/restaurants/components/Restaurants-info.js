import React from 'react';
import { Text, View } from 'react-native';
import { Card } from 'react-native-paper';
import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
  padding: ${(props) => props.theme.space[3]};
`;

const CardContainer = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

const Cover = styled(Card.Cover)`
  padding: ${(props) => props.theme.space[3]};
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

const Title = styled.Text`
  font-size: ${(props) => props.theme.fontSizes.body};
  color: ${(props) => props.theme.colors.ui.primary};
  font-family: ${(props) => props.theme.fonts.heading};
`;

const Info = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

const Address = styled.Text`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.body};
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
        <Info>
          <Title>{name}</Title>
          <Address>{address}</Address>
        </Info>
      </CardContainer>
    </Container>
  );
};

export default RestaurentInfo;
