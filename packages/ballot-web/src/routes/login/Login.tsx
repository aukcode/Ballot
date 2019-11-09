import * as React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { ChangeEvent, FormEvent, useState } from 'react';
import { RouteMap } from '../RouteMap';
import { useAuth } from '../../api/auth/AuthContext';
const voteHere = require('./vote-here.jpg');

enum Error {
  NO_ERROR = 'NO_ERROR',
  SERVER_ERROR = 'SERVER_ERROR',
  LOGIN_ERROR = 'LOGIN_ERROR',
}

interface LoginProps {}

type Props = LoginProps & RouteComponentProps<{}>;

const Login = (props: Props) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<Error>(Error.NO_ERROR);
  const { signIn } = useAuth();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const result = await fetch('http://localhost:8080/api/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });
      const token = result.headers.get('authorization') || '';
      result.json().then(user => {
        signIn(token, { id: user._id, name: user.name, email: user.email });
      });

      if (result.status === 200) {
        props.history.push(RouteMap.home.path);
      } else {
        setError(Error.LOGIN_ERROR);
      }
    } catch {
      setError(Error.SERVER_ERROR);
    }
  };

  const navigateToRegister = () => {
    props.history.push(RouteMap.user.register + '?email=' + email);
  };

  const renderErrorMessage = () => {
    if (error === Error.LOGIN_ERROR) {
      return (
        <p className="text-red-600 font-bold text-sm text-center">
          A valid email and password must be provided
        </p>
      );
    } else if (error === Error.SERVER_ERROR) {
      return (
        <p className="text-red-600 font-bold text-sm text-center">
          There was a problem connecting to the server
        </p>
      );
    } else {
      return;
    }
  };

  return (
    <div
      className="bg-cover bg-center bg-gray-500 vote-background-image"
      style={{
        backgroundImage: `url(${voteHere})`,
      }}
    >
      <div className="flex justify-center items-center h-screen">
        <div className="mx-3 w-full sm:mx-auto w-auto md:w-1/2 lg:w-1/3 bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          {/*TODO: implement Passport / OAuth SSO*/}
          <form onSubmit={handleSubmit}>
            <div className="mb-4 mt-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="email"
                id="email"
                placeholder="Email"
                value={email}
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                  setEmail(e.target.value);
                  setError(Error.NO_ERROR);
                }}
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                type="password"
                placeholder="******************"
                value={password}
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                  setPassword(e.target.value);
                  setError(Error.NO_ERROR);
                }}
              />
              {renderErrorMessage()}
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Sign In
              </button>
              <a
                className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                href="forgotpass"
              >
                Forgot Password?
              </a>
            </div>
          </form>
          <div className="mt-8">
            <p className="font-bold">Not a user?</p>
            <button
              onClick={navigateToRegister}
              className="w-full mt-2 font-bold p-2 text-white bg-orange-500 hover:bg-orange-400 rounded"
            >
              Sign up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export const LoginComponent = withRouter(Login);
