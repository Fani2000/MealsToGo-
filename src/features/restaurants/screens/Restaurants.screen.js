import * as React from 'react';
import { FlatList, View } from 'react-native';
import SearchBar from '../../../components/SearchBar';
import RestaurentInfo from '../components/Restaurants-info';
import styled from 'styled-components/native';
import { SafeAreaViewContainer } from '../../../components/Safe-area-component.js/safe-area-component';
import { RestaurantsContext } from '../../../services/restaurants/restaurant-context';
import { ActivityIndicator, Colors } from 'react-native-paper';

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]} ${(props) => props.theme.space[2]};
`;

export default function RestaurantsScreen() {
  const { restaurants, isLoading, error } =
    React.useContext(RestaurantsContext);

  return (
    <SafeAreaViewContainer>
      <SearchContainer>
        <SearchBar />
      </SearchContainer>
      {isLoading && (
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <ActivityIndicator
            size={50}
            style={{ marginLeft: -25 }}
            color={Colors.red300}
            animating={true}
          />
        </View>
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
