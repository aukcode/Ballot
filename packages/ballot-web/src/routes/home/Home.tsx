import * as React from 'react';
import { withRouter } from 'react-router-dom';
import { useState, useEffect } from 'react';

const fetchHey = async (setState: (state: string) => void) => {
  const result = await fetch('http://localhost:8080/hey').then(res =>
    res.json()
  );
  console.log(result);
  setState(result.hey);
};

interface HomeProps {}

const Home = (props: HomeProps) => {
  const [state, setstate] = useState<string>('Loading...');

  useEffect(() => {
    fetchHey(setstate);
  }, []);

  return (
    <div>
      <h1>Home, Sweet Home</h1>
      <h2>{state}</h2>
    </div>
  );
};

export const HomeComponent = withRouter(Home);
