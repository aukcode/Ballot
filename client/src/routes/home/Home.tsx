import * as React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { FormEvent, useState } from 'react';
import { ChangeEvent } from 'react';

interface HomeProps {}

type Props = RouteComponentProps<{}> & HomeProps;

const Home = (props: Props) => {
  const [pin, setPin] = useState<string>('');
  const [name, setName] = useState<string>('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="h-screen">
      <div className="mt-48 mx-3 sm:mx-auto sm:max-w-sm">
        <h1 className="text-green-200">hei</h1>
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
