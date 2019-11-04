import { AuthContextValues } from './AuthContext';
import { useState } from 'react';
import {
  clearRefreshTokenFromLocalStorage,
  getRefreshTokenFromLocalStorage,
  storeRefreshToken,
} from './TokenUtil';
import { User } from '../../models/User';

const isUserAuthenticated = !!getRefreshTokenFromLocalStorage();

export const CreateAuthHook = (): AuthContextValues => {
  const [isSignedIn, setSignedIn] = useState<boolean>(isUserAuthenticated);
  const [user, setUser] = useState<User>();
  const signOut = () => {
    clearRefreshTokenFromLocalStorage();
    setSignedIn(false);
    setUser(undefined);
  };
  const signIn = (refreshToken: string, user: User) => {
    storeRefreshToken(refreshToken);
    setSignedIn(true);
    setUser(user);
  };
  // The following is also used on survey hook (work). Don't know why
  // httpClient.registerOnTokenRefreshFailedCallback(signOut);
  return {
    isSignedIn,
    user,
    signIn,
    signOut,
  };
};
