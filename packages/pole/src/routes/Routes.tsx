import * as React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { RouteMap } from './RouteMap';
import { HomeComponent } from './home/Home';
import { LoginComponent } from './login/Login';

export const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route
          path={RouteMap.home.path}
          component={HomeComponent}
          exact={true}
        />
        <Route
          path={RouteMap.login.path}
          component={LoginComponent}
          exact={true}
        />
      </Switch>
    </BrowserRouter>
  );
};
