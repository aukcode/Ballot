import * as React from 'react';
import { withRouter } from 'react-router-dom';

interface HomeProps {}

const Home = (props: HomeProps) => {
  return (
    <div>
      <h1>Testing home</h1>
    </div>
  );
};

export const HomeCompnent = withRouter(Home);
