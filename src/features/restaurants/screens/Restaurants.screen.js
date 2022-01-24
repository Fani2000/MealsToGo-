import React, { useContext, useState } from 'react';
import { FlatList, TouchableOpacity, View } from 'react-native';
import RestaurentInfo from '../components/Restaurants-info';
import { SafeAreaViewContainer } from '../../../components/Safe-area-component/safe-area-component';
import { RestaurantsContext } from '../../../services/restaurants/restaurant-context';
import { ActivityIndicator, Colors } from 'react-native-paper';
import Search from '../components/search-component';
import styled from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';
import FavouritesBar from '../../../components/favourites/favourites-bar-components';
import { FavouritesContext } from '../../../services/favourites/favourites.context';

const LoadingContainer = styled.View`
  flex: 1;
  justify-content: center;
`;

export default function RestaurantsScreen() {
  const navigate = useNavigation();
  const { restaurants, isLoading, error } = useContext(RestaurantsContext);
  const { favourites } = useContext(FavouritesContext);
  const [isToggled, setIsToggled] = useState(false);

  const handleRestaurantsDetails = (item) => {
    navigate.navigate('RestaurantsDetails', { restaurant: item });
  };

  return (
    <SafeAreaViewContainer>
      <Search
        isFavouritesToggle={isToggled}
        onFavouritesToggled={() => setIsToggled(!isToggled)}
      />
      {isToggled && <FavouritesBar favourites={favourites} />}
      {isLoading && (
        <LoadingContainer>
          <ActivityIndicator
            size={50}
            style={{ marginLeft: -25 }}
            color={Colors.red300}
            animating={true}
          />
        </LoadingContainer>
      )}
      {!isLoading && (
        <FlatList
          data={restaurants}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => handleRestaurantsDetails(item)}>
              <RestaurentInfo restaurant={item} />
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.name}
          contentContainerStyle={{ padding: 4 }}
        />
      )}
    </SafeAreaViewContainer>
  );
}
