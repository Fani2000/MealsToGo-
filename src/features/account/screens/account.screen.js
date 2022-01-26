import { View, Text } from 'react-native';
import React from 'react';
import {
  AccountBackground,
  AccountContainer,
  AccountCover,
  AuthButton,
} from '../components/account.styles';
import Spacer from '../../../components/spacer/Spacer-component';
import { useNavigation } from '@react-navigation/native';

const AccountScreen = () => {
  const navigation = useNavigation();
  return (
    <AccountBackground>
      <AccountCover />
      <AccountContainer>
        <AuthButton
          onPress={() => navigation.navigate('Login')}
          icon="lock-open-outline"
          mode="contained"
        >
          Login
        </AuthButton>
        <Spacer position="top" size="large">
          <AuthButton
            onPress={() => navigation.navigate('Register')}
            icon="email"
            mode="contained"
          >
            Register
          </AuthButton>
        </Spacer>
      </AccountContainer>
    </AccountBackground>
  );
};

export default AccountScreen;
