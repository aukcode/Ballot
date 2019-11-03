import * as React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { RouteMap } from './RouteMap';
import { HomeComponent } from './home/Home';
import { PollComponent } from './poll/Poll';
import { CreateComponent } from './create/Create';
import { NewPollComponent } from './create/new-poll/NewPoll';
import { LoginComponent } from './login/login';
import { RegisterCompoent } from './login/register';

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
          path={RouteMap.user.register}
          component={RegisterCompoent}
          exact={true}
        />
        <Route
          path={RouteMap.user.login}
          component={LoginComponent}
          exact={true}
        />
        <Route
          path={RouteMap.poll.path}
          component={PollComponent}
          exact={true}
        />
        <Route
          path={RouteMap.create.path}
          component={CreateComponent}
          exact={true}
        />
        <Route
          path={RouteMap.create.new}
          component={NewPollComponent}
          exact={true}
        />
        <Route />
      </Switch>
    </BrowserRouter>
  );
};
