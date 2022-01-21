import React, { createContext } from 'react';

export const RestaurantsContext = createContext([]);

export const RestaurantProvider = ({ children }) => {
  return (
    <RestaurantsContext.Provider value={{ restaurants: [1, 2, 3] }}>
      {children}
    </RestaurantsContext.Provider>
  );
};