import { AuthContextValues } from './AuthContext';
import { useEffect, useState } from 'react';
import {
  clearRefreshTokenFromLocalStorage,
  getRefreshTokenFromLocalStorage,
  storeRefreshToken,
} from './TokenUtil';
import { User } from '../../models/User';
import {
  clearUserIdFromLocalStorage,
  getUserIdFromLocalStorage,
  storeUserId,
} from './StoreUser';

const isUserAuthenticated = !!getRefreshTokenFromLocalStorage();

export const CreateAuthHook = (): AuthContextValues => {
  const [isSignedIn, setSignedIn] = useState<boolean>(isUserAuthenticated);
  const [user, setUser] = useState<User>();
  const signOut = () => {
    clearRefreshTokenFromLocalStorage();
    clearUserIdFromLocalStorage();
    setSignedIn(false);
    setUser(undefined);
  };
  const signIn = (refreshToken: string, user: User) => {
    storeRefreshToken(refreshToken);
    storeUserId(user.id);
    setSignedIn(true);
    setUser(user);
  };

  useEffect(() => {
    if (isUserAuthenticated) {
      const userId = getUserIdFromLocalStorage();
      try {
        const fetchUser = async () => {
          const result = await fetch(
            `http://localhost:8080/api/users/${userId}`,
            {
              method: 'GET',
            }
          );
          result.json().then(res => setUser({ ...res, id: res._id }));
        };
        fetchUser();
      } catch (err) {
        console.log('error refetching user in hook');
        console.log(err);
      }
    } else {
      signOut();
    }
  }, [isSignedIn]);

  // The following is also used on survey hook (work). Don't know why
  // httpClient.registerOnTokenRefreshFailedCallback(signOut);
  return {
    isSignedIn,
    user,
    signIn,
    signOut,
  };
};
