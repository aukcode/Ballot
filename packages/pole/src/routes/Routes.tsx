import * as React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { RouteMap } from './RouteMap';

export const Routes = () => {
  <BrowserRouter>
    <Switch>
      <Route path={RouteMap.home.path} component={} exact={true} />

      <Route />
    </Switch>
  </BrowserRouter>;
};
