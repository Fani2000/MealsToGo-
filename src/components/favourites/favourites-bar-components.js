import { ScrollView } from 'react-native';
import React from 'react';
import styled from 'styled-components/native';
import Spacer from '../spacer/Spacer-component';
import CompactRestaurantInfo from '../CompactRestaurantInfo';
import { Text } from '../typography/text-component';

const FavouritesWrapper = styled.View`
  padding: 10px;
`;

const FavouritesBar = ({ favourites }) => {
  if (!favourites.length) return null;

  return (
    <FavouritesWrapper>
      <Spacer variant="left.large">
        <Text variant="caption">Favourites</Text>
      </Spacer>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {favourites.map((restaurant) => {
          const key = restaurant.name;
          return (
            <Spacer key={key} position="left" size="medium">
              <CompactRestaurantInfo restaurant={restaurant} />
            </Spacer>
          );
        })}
      </ScrollView>
    </FavouritesWrapper>
  );
};

export default FavouritesBar;
