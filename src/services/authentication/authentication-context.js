import React, { createContext, useState } from 'react';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { auth } from './authentication-service';

export const AuthenticationContext = createContext();

export const AuthenticationProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  const onLogin = async (email, password) => {
    setIsLoading(true);
    try {
      const user = await signInWithEmailAndPassword(auth, email, password);
      setUser(user);
      setIsAuthenticated(true);
      setIsLoading(false);
    } catch (e) {
      setError(e.message);
      setIsLoading(false);
      setIsAuthenticated(false);
    }
  };

  const onRegister = async (email, password, repeatedPassword) => {
    if (password !== repeatedPassword) {
      setError('Error: Passwords do not match');
      return;
    }

    setIsLoading(true);
    try {
      const user = await createUserWithEmailAndPassword(auth, email, password);
      setUser(user);
      setIsAuthenticated(true);
      setIsLoading(false);
    } catch (e) {
      setError(e.message);
      setIsLoading(false);
      setIsAuthenticated(false);
    }
  };

  return (
    <AuthenticationContext.Provider
      value={{
        user,
        isLoading,
        error,
        isAuthenticated,
        onLogin,
        onRegister,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};
