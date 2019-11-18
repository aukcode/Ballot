import { createContext, useContext } from 'react';
import { User } from '../../models/User';

export interface AuthContextValues {
  isSignedIn: boolean;
  user?: User;
  signIn: (refreshToken: string, user: User) => void;
  signOut: () => void;
}

const defaultContext = <T>() => {
  return {} as T;
};

export const AuthContext = createContext<AuthContextValues>(defaultContext());
export const useAuth = () => useContext(AuthContext);
