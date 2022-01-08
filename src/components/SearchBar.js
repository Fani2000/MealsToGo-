import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Searchbar } from 'react-native-paper';

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const searchQueryhandler = (query) => {
    setSearchQuery(query);
  };

  return (
    <View style={styles.searchContainer}>
      <Searchbar
        placeholder="Seach"
        value={searchQuery}
        onChangeText={searchQueryhandler}
      />
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  searchContainer: {
    padding: 10,
  },
});
