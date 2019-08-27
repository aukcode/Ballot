import * as React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { RouteMap } from './RouteMap';
import { HomeCompnent } from './home/Home';

export const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route
          path={RouteMap.home.path}
          component={HomeCompnent}
          exact={true}
        />

        <Route />
      </Switch>
    </BrowserRouter>
  );
};
