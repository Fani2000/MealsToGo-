import { Text, View } from 'react-native';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import AccountScreen from '../../features/account/screens/account.screen';
import LoginScreen from '../../features/account/screens/login.screen';
import RegisterScreen from '../../features/account/screens/register.screen';

const AuthStack = createStackNavigator();

export const AccountNavigator = () => {
  return (
    <NavigationContainer>
      <AuthStack.Navigator screenOptions={{ headerShown: false }}>
        <AuthStack.Screen name="Main" component={AccountScreen} />
        <AuthStack.Screen name="Login" component={LoginScreen} />
        <AuthStack.Screen name="Register" component={RegisterScreen} />
      </AuthStack.Navigator>
    </NavigationContainer>
  );
};
