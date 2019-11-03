import * as React from 'react';
import { withRouter } from 'react-router-dom';
import { useState } from 'react';
import { ChangeEvent } from 'react';

interface HomeProps {}

const Home = (props: HomeProps) => {
  const [pin, setPin] = useState<string>('');
  const [name, setName] = useState<string>('');

  const handlePinChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPin(e.target.value);
    console.log(pin);
  };
  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
    console.log(name);
  };

  const handleSubmit = () => {
    alert(pin + ', ' + name);
  };

  return (
    <div className="h-screen">
      <div className="bg-blue-400 p-4 flex justify-end">
        <p className="font-medium p-2">Login</p>
        <p className="font-bold p-2 ml-4 text-white bg-orange-500 hover:bg-orange-400 rounded">
          Sign up
        </p>
      </div>

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
              onChange={handlePinChange}
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
              onChange={handleNameChange}
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
