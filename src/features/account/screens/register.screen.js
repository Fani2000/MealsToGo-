import React, { useContext, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { ActivityIndicator, Colors } from 'react-native-paper';
import {
  AccountBackground,
  AuthButton,
  AuthContainer,
  AuthInput,
} from '../components/account.styles';
import { Text } from '../../../components/typography/text-component';
import Spacer from '../../../components/spacer/Spacer-component';
import { AuthenticationContext } from '../../../services/authentication/authentication-context';

const RegisterScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const { onRegister, error, isLoading } = useContext(AuthenticationContext);
  const navigator = useNavigation();

  return (
    <AccountBackground>
      <AuthContainer>
        <Spacer size="large">
          <AuthInput
            label="E-mail"
            value={email}
            textContentType="emailAddress"
            keyboardType="email-address"
            autoCapitalize="none"
            onChangeText={(u) => setEmail(u)}
          />
        </Spacer>
        <Spacer size="large">
          <AuthInput
            label="Password"
            value={password}
            textContentType="password"
            secureTextEntry
            autoCapitalize="none"
            onChangeText={(u) => setPassword(u)}
          />
        </Spacer>
        <Spacer size="large">
          <AuthInput
            label="Confirm Password"
            value={confirmPassword}
            textContentType="password"
            secureTextEntry
            autoCapitalize="none"
            onChangeText={(u) => setConfirmPassword(u)}
          />
        </Spacer>
        {error && (
          <Spacer size="large">
            <Text variant="error">{error}</Text>
          </Spacer>
        )}
        <Spacer size="large">
          {!isLoading ? (
            <AuthButton
              onPress={() => onRegister(email, password, confirmPassword)}
              icon="email"
              mode="contained"
            >
              Register
            </AuthButton>
          ) : (
            <ActivityIndicator animating={true} color={Colors.blue300} />
          )}
        </Spacer>
        <Spacer size="large">
          <AuthButton
            onPress={() => navigator.navigate('Main')}
            icon="arrow-left"
            mode="contained"
          >
            Back
          </AuthButton>
        </Spacer>
      </AuthContainer>
    </AccountBackground>
  );
};

export default RegisterScreen;
