import * as React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { ChangeEvent, FormEvent, useState } from 'react';
import { useEffect } from 'react';
const voteHere = require('./vote-here.jpg');

interface RegisterProps {}

type Props = RegisterProps & RouteComponentProps<{}>;

const Register = (props: Props) => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e: FormEvent) => {
    // e.preventDefault();
    // Fetch register API POST request
    console.log(name, email, password);
  };

  useEffect(() => {
    const emailFromParams = new URLSearchParams(props.location.search).get(
      'email'
    );
    if (emailFromParams) {
      setEmail(emailFromParams);
    }
  }, [props.location.search]);

  return (
    <div
      className="bg-cover bg-center bg-gray-500 vote-background-image"
      style={{
        backgroundImage: `url(${voteHere})`,
      }}
    >
      <div className="flex justify-center items-center h-screen">
        <div className="mx-3 sm:mx-auto w-auto md:w-1/2 lg:w-1/3 bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
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
                onChange={handleNameChange}
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
                onChange={handleEmailChange}
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
                onChange={handlePasswordChange}
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
        </div>
      </div>
    </div>
  );
};

export const RegisterCompoent = withRouter(Register);
