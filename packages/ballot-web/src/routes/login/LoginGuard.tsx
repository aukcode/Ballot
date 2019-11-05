import * as React from 'react';
import { ReactNode } from 'react';
import { RouteComponentProps, withRouter } from 'react-router';
import { useAuth } from '../../api/auth/AuthContext';
import { LoginComponent } from './Login';

export interface LoginGuardOwnProps {
  children?: ReactNode;
}

type LoginGuardProps = LoginGuardOwnProps & RouteComponentProps<{}>;

const Guard = (props: LoginGuardProps) => {
  const { isSignedIn } = useAuth();

  if (isSignedIn) {
    return <>{props.children}</>;
  }
  return <LoginComponent />;
};

export const LoginGuard = withRouter(Guard);
