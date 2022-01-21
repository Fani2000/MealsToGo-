import React, { createContext, useContext, useEffect, useState } from 'react';
import { LocationContext } from '../location/location.context';
import { restaurantsRequest, restaurantsTransform } from './restaurant-service';

export const RestaurantsContext = createContext();

export const RestaurantProvider = ({ children }) => {
  const [restaurants, setRestaurants] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { location } = useContext(LocationContext);

  const retriveRestaurants = (loc) => {
    setIsLoading(true);
    setRestaurants([]);

    setTimeout(() => {
      restaurantsRequest(loc)
        .then(restaurantsTransform)
        .then((data) => {
          setIsLoading(false);
          setRestaurants(data);
        })
        .catch((e) => {
          setIsLoading(false);
          setError(e);
        });
    }, 2000);
  };

  useEffect(() => {
    if (location) {
      const locationString = `${location.lat},${location.lng}`;
      retriveRestaurants(locationString);
    }
  }, [location]);

  return (
    <RestaurantsContext.Provider value={{ restaurants, isLoading, error }}>
      {children}
    </RestaurantsContext.Provider>
  );
};
