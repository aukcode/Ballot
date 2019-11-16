import * as React from 'react';
import { RouteMap } from '../RouteMap';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { useAuth } from '../../api/auth/AuthContext';

interface NavbarProps {}

type Props = RouteComponentProps<{}> & NavbarProps;

const NavbarComponent = (props: Props) => {
  const { isSignedIn, signOut, user } = useAuth();
  const renderNameOrSigninButtons = () => {
    if (isSignedIn) {
      return (
        <div className="flex items-center justify-between">
          <div>
            <button
              onClick={() =>
                props.history.push(RouteMap.manage.edit.createPath('new'))
              }
              className="font-bold p-2 text-white cursor-pointer bg-orange-500 hover:bg-orange-400 rounded"
            >
              New Poll
            </button>
            <button
              onClick={() => props.history.push(RouteMap.home.path)}
              className="font-bold p-2 ml-6 text-white hover:text-gray-300 cursor-pointer"
            >
              Home
            </button>
            <button
              onClick={() => props.history.push(RouteMap.manage.path)}
              className="font-bold p-2 ml-6 text-white hover:text-gray-300 cursor-pointer"
            >
              Manage Polls
            </button>
          </div>
          <div className="flex">
            <div>
              <p className="font-light text-gray-900 text-sm">Logged in as:</p>
              <p className="font-bold text-white">
                {user ? user.name : 'incognito'}
              </p>
            </div>
            <button
              className="p-2 ml-6 cursor-pointer text-white bg-gray-800 hover:bg-gray-700 rounded"
              onClick={signOut}
            >
              Log out
            </button>
          </div>
        </div>
      );
    } else {
      return (
        <div className="flex justify-between">
          <button
            onClick={() => props.history.push(RouteMap.home.path)}
            className="font-bold p-2 ml-6 text-white hover:text-gray-300 cursor-pointer"
          >
            Home
          </button>
          <div className="flex">
            <p
              className="font-medium p-2 cursor-pointer text-white"
              onClick={() => props.history.push(RouteMap.user.login)}
            >
              Log in
            </p>
            <p
              className="font-bold p-2 ml-4 text-white bg-orange-500 hover:bg-orange-400 rounded cursor-pointer"
              onClick={() => props.history.push(RouteMap.user.register)}
            >
              Sign up
            </p>
          </div>
        </div>
      );
    }
  };

  return (
    <div>
      <div className="bg-blue-500 px-8 py-4">{renderNameOrSigninButtons()}</div>
    </div>
  );
};

export const Navbar = withRouter(NavbarComponent);
