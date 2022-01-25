import React, { useContext } from 'react';
import { AuthenticationContext } from '../../services/authentication/authentication-context';
import AppNavigator from './app.navigator';
import { AccountNavigator } from './account.navigator';

const Navigator = () => {
  const { user, isLoading, error, isAuthenticated } = useContext(
    AuthenticationContext
  );

  return isAuthenticated ? <AppNavigator /> : <AccountNavigator />;
};

export default Navigator;
