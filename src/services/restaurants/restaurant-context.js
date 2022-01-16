import React, { createContext } from 'react';
import { mocks } from './mock';

const defaultValues = {
  mocks,
};

const value = { mocks };

export const RestaurantsContext = createContext(defaultValues);

export const RestaurantProvider = ({ children }) => {
  return (
    <RestaurantsContext.Provider value={value}>
      {children}
    </RestaurantsContext.Provider>
  );
};
