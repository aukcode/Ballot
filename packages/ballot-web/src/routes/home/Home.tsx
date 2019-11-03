import * as React from 'react';
import { withRouter } from 'react-router-dom';
import { useState } from 'react';
import { ChangeEvent } from 'react';

interface HomeProps {}

const Home = (props: HomeProps) => {
  const [pin, setPin] = useState<string>('');

  const handlePinChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPin(e.target.value);
    console.log(pin);
  };

  const handleSubmit = () => {
    alert(pin);
  };

  return (
    <div className="h-screen">
      <div className="bg-blue-400 p-4 flex justify-end">
        <p className="font-medium p-2">Login</p>
        <p className="font-bold p-2 ml-4 text-white bg-orange-500 hover:bg-orange-400 rounded">
          Sign up
        </p>
      </div>

      <div className="max-w-sm mx-auto mt-48">
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

          <div className="flex items-center justify-between">
            <button
              className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              ENTER
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export const HomeComponent = withRouter(Home);
