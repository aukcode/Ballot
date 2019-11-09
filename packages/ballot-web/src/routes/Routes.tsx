import * as React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { RouteMap } from './RouteMap';
import { HomeComponent } from './home/Home';
import { EditPollComponent } from './manage-polls/EditPoll';
import { LoginComponent } from './login/Login';
import { RegisterComponent } from './login/Register';
import { LoginGuard } from './login/LoginGuard';
import { ManagePollsComponent } from './manage-polls/ManagePolls';

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
          component={RegisterComponent}
          exact={true}
        />
        <Route
          path={RouteMap.user.login}
          component={LoginComponent}
          exact={true}
        />
        <LoginGuard>
          <Route
            path={RouteMap.manage.path}
            component={ManagePollsComponent}
            exact={true}
          />
          <Route
            path={RouteMap.manage.edit.path}
            component={EditPollComponent}
            exact={true}
          />
        </LoginGuard>
        <Route />
      </Switch>
    </BrowserRouter>
  );
};
