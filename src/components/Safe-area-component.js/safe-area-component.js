import { FlatList, Platform, SafeAreaView, StyleSheet } from 'react-native';
import styled from 'styled-components/native';

const isAndroid = Platform.OS === 'android' ? StatusBar.currentHeight : 0;

export const SafeAreaViewContainer = styled(SafeAreaView)`
  margin-top: ${isAndroid}px;
`;
