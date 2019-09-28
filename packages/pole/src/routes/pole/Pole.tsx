import * as React from 'react';
import { withRouter } from 'react-router-dom';
import { useState, useEffect } from 'react';

interface PoleProps {}

const Pole = (props: PoleProps) => {
  const [state, setstate] = useState<string>('Loading...');

  return (
    <div>
      <h1>Home, Sweet Home</h1>
      <h2>{state}</h2>
    </div>
  );
};

export const PoleComponent = withRouter(Pole);
