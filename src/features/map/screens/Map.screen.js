import React, { useContext, useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import styled from 'styled-components';
import { SafeAreaViewContainer } from '../../../components/Safe-area-component/safe-area-component';
import { LocationContext } from '../../../services/location/location.context';
import { RestaurantsContext } from '../../../services/restaurants/restaurant-context';
import Search from '../components/Search';

const Map = styled(MapView)`
  height: 100%;
  width: 100%;
`;

const MapScreen = () => {
  const { restaurants = [] } = useContext(RestaurantsContext);
  const { location } = useContext(LocationContext);
  const [latDelta, setLatDelta] = useState(0);

  const { viewport } = location;

  useEffect(() => {
    const northeastLat = viewport.northeast.lat;
    const southwestLat = viewport.southwest.lat;

    const latDelta = northeastLat - southwestLat;
    setLatDelta(latDelta);
  }, [location, viewport]);

  return (
    <SafeAreaViewContainer>
      <Search />
      <Map>
        {restaurants.map((restaurant) => {
          return <Marker key={restaurant.id}></Marker>;
        })}
      </Map>
    </SafeAreaViewContainer>
  );
};

export default MapScreen;
