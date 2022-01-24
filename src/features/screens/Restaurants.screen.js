import * as React from 'react';
import { FlatList, View } from 'react-native';
import RestaurentInfo from '../restaurants/components/Restaurants-info';
import { SafeAreaViewContainer } from '../../components/Safe-area-component/safe-area-component';
import { RestaurantsContext } from '../../services/restaurants/restaurant-context';
import { ActivityIndicator, Colors } from 'react-native-paper';
import Search from '../restaurants/components/search-component';
import styled from 'styled-components/native';

const LoadingContainer = styled.View`
  flex: 1;
  justify-content: center;
`;

export default function RestaurantsScreen() {
  const { restaurants, isLoading, error } =
    React.useContext(RestaurantsContext);

  return (
    <SafeAreaViewContainer>
      <Search />
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
          renderItem={({ item }) => <RestaurentInfo restaurant={item} />}
          keyExtractor={(item) => item.name}
          contentContainerStyle={{ padding: 4 }}
        />
      )}
    </SafeAreaViewContainer>
  );
}
