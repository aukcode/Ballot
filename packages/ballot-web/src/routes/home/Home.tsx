import * as React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { FormEvent, useState } from 'react';
import { ChangeEvent } from 'react';
import { RouteMap } from '../RouteMap';
import { useAuth } from '../../api/auth/AuthContext';

interface HomeProps {}

type Props = RouteComponentProps<{}> & HomeProps;

const Home = (props: Props) => {
  const [pin, setPin] = useState<string>('');
  const [name, setName] = useState<string>('');
  const { isSignedIn, signOut, user } = useAuth();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  const navigateToLogin = () => {
    props.history.push(RouteMap.user.login);
  };

  const navigateToRegister = () => {
    props.history.push(RouteMap.user.register);
  };

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
              onClick={() => props.history.push(RouteMap.manage.path)}
              className="font-bold p-2 ml-6 text-white cursor-pointer"
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
        <div className="flex justify-end">
          <p
            className="font-medium p-2 cursor-pointer text-white"
            onClick={navigateToLogin}
          >
            Log in
          </p>
          <p
            className="font-bold p-2 ml-4 text-white bg-orange-500 hover:bg-orange-400 rounded cursor-pointer"
            onClick={navigateToRegister}
          >
            Sign up
          </p>
        </div>
      );
    }
  };

  return (
    <div className="h-screen">
      <div className="bg-blue-500 px-8 py-4">{renderNameOrSigninButtons()}</div>
      <div className="mt-48 mx-3 sm:mx-auto sm:max-w-sm">
        <form onSubmit={handleSubmit}>
          <div className="mb-4 mt-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="pin"
            >
              Join a Poll!
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              id="pin"
              placeholder="Poll Pin"
              value={pin}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setPin(e.target.value)
              }
            />
          </div>
          <div className="mb-4 mt-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="name"
            >
              Enter your name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              id="name"
              placeholder="Name"
              value={name}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setName(e.target.value)
              }
            />
          </div>

          <button
            className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            ENTER
          </button>
        </form>
      </div>
    </div>
  );
};

export const HomeComponent = withRouter(Home);
