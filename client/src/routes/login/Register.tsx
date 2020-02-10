import * as React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { ChangeEvent, FormEvent, useState } from 'react';
import { useEffect } from 'react';
import { RouteMap } from '../RouteMap';
import { backendAddress } from '../../config';
const voteHere = require('./vote-here.jpg');

enum RegisterStatus {
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR',
  REGISTER = 'REGISTER',
}

interface RegisterProps {}

type Props = RegisterProps & RouteComponentProps<{}>;

const Register = (props: Props) => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [registerStatus, setRegisterStatus] = useState<RegisterStatus>(
    RegisterStatus.REGISTER
  );
  const [errorMessage, setErrorMessage] = useState<string>('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const result = await fetch(`${backendAddress}/api/users/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    });

    if (result.status === 200) {
      setRegisterStatus(RegisterStatus.SUCCESS);
    } else {
      setRegisterStatus(RegisterStatus.ERROR);
      //setErrorMessage(result)
      result.text().then(data => setErrorMessage(data))
    }
  };

  useEffect(() => {
    const emailFromParams = new URLSearchParams(props.location.search).get(
      'email'
    );
    if (emailFromParams) {
      setEmail(emailFromParams);
    }
  }, [props.location.search]);

  const navigateToLogin = () => {
    props.history.push(RouteMap.user.login);
  };

  const renderFormSuccessOrError = () => {
    if (registerStatus === RegisterStatus.SUCCESS) {
      return (
        <div className="h-40 flex justify-center items-center text-center">
          <div>
            <p className="font-bold">Welcome to Ballot, {name}!</p>
            <button
              onClick={() => navigateToLogin()}
              className="font-bold w-full p-2 mt-4 text-white cursor-pointer bg-blue-500 hover:bg-blue-700 rounded"
            >
              Go to login
            </button>
          </div>
        </div>
      );
    } else if (registerStatus === RegisterStatus.ERROR) {
      return (
        <div className="h-40 flex justify-center items-center text-center">
          <div>
            <p>
            An error occurred: {errorMessage}
            </p>
            <p className="font-bold">
              
              Do you want to try again?
            </p>
            <button
              onClick={() => setRegisterStatus(RegisterStatus.REGISTER)}
              className="font-bold w-full p-2 mt-4 text-white cursor-pointer bg-orange-500 hover:bg-orange-400 rounded"
            >
              Try Again
            </button>
          </div>
        </div>
      );
    } else {
      return (
        <form onSubmit={handleSubmit} action="/api/register" method="POST">
          <div className="mb-4 mt-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setName(e.target.value)
              }
            />
          </div>
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
              placeholder="Email adress"
              value={email}
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                setEmail(e.target.value);
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
              }}
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="w-full mt-2 font-bold p-2 text-white bg-orange-500 hover:bg-orange-400 rounded"
              type="submit"
            >
              Sign up
            </button>
          </div>
        </form>
      );
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
          {renderFormSuccessOrError()}
        </div>
      </div>
    </div>
  );
};

export const RegisterComponent = withRouter(Register);
