import { useState, createContext, useEffect } from 'react';

import { locationTransform, locationRequest } from './location.services';

export const LocationContext = createContext();

export const LocationProvider = ({ children }) => {
  const [location, setLoacation] = useState(null);
  const [keyword, setKeyword] = useState('san francisco');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const onSearch = (searchKeyword) => {
    setIsLoading(true);
    setKeyword(searchKeyword);

    if (!searchKeyword.length) {
      return;
    }

    locationRequest(searchKeyword.toLowerCase())
      .then(locationTransform)
      .then((result) => {
        setLoacation(result);
        setIsLoading(false);
        console.log(result);
      })
      .catch((e) => {
        setIsLoading(false);
        setError(e);
      });
  };

  return (
    <LocationContext.Provider
      value={{
        isLoading,
        error,
        location,
        search: onSearch,
        keyword,
      }}
    >
      {children}
    </LocationContext.Provider>
  );
};
