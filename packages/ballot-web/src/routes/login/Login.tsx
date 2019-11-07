import * as React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { ChangeEvent, FormEvent, useState } from 'react';
import { RouteMap } from '../RouteMap';
import { useAuth } from '../../api/auth/AuthContext';
const voteHere = require('./vote-here.jpg');

interface LoginProps {}

type Props = LoginProps & RouteComponentProps<{}>;

const Login = (props: Props) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const { signIn, user } = useAuth();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    await fetch('http://localhost:8080/api/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then(response => console.log(response.headers.get('authorization')))
      // .then(user =>
      //   signIn(user.headers.get('authorization'), {
      //     name: user.name,
      //     email: user.email,
      //   })
      // )
      .catch(err => console.log(`Error catch on fetch: ${err}`));

    console.log(user);
    // props.history.push(RouteMap.home.path);
  };

  const navigateToRegister = () => {
    props.history.push(RouteMap.user.register + '?email=' + email);
  };

  return (
    <div
      className="bg-cover bg-center bg-gray-500 vote-background-image"
      style={{
        backgroundImage: `url(${voteHere})`,
      }}
    >
      <div className="flex justify-center items-center h-screen">
        <div className="mx-3 sm:mx-auto w-auto md:w-1/2 lg:w-1/3 bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
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
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setEmail(e.target.value)
                }
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
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setPassword(e.target.value)
                }
              />
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
