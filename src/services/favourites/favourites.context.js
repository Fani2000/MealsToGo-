import React, { createContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const FavouritesContext = createContext();

const saveFavourites = async (value) => {
  try {
    const jsonFavourites = JSON.stringify(value);
    await AsyncStorage.setItem('@storage_favourites', jsonFavourites);
  } catch (e) {
    console.log('Error Storing', e);
  }
};

const loadFavourites = async (value) => {
  try {
    const jsonFavourites = await AsyncStorage.getItem('@storage_favourites');
    if (!jsonFavourites) {
      setFavourites(JSON.parse(jsonFavourites));
    }
  } catch (e) {
    console.log('Error loadng', e);
  }
};

export const FavouriteContextProvider = (props) => {
  const [favourites, setFavourites] = useState([]);

  useEffect(() => {
    saveFavourites(favourites);
  }, [favourites]);

  useEffect(() => {
    loadFavourites();
  }, []);

  const add = (restaurant) => {
    setFavourites([...favourites, restaurant]);
  };

  const remove = (restaurant) => {
    const newFavourites = favourites.filter(
      (x) => x.placeId != restaurant.placeId
    );
    setFavourites(newFavourites);
  };
  return (
    <FavouritesContext.Provider
      value={{
        favourites,
        addToFavourites: add,
        removeFromFavourites: remove,
      }}
    >
      {props.children}
    </FavouritesContext.Provider>
  );
};
