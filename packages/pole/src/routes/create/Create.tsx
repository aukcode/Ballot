import * as React from 'react';
import { Pole } from '../../models/Pole';

import { withRouter } from 'react-router-dom';
import './Create.css';
import { PoleCardComponent } from './pole-card/PoleCard';

interface CreateComponentProps {}

const Create = (props: CreateComponentProps) => {
  const mockPole: Pole = {
    id: 'aldnføaehsrpoaw4borqnøo3url',
    polePin: 123456,
    title: 'Test Pole',
    queries: [
      {
        question: "Who's your daddy",
        alternatives: ['Me', 'Myself', 'I'],
      },
    ],
  };

  const mockPoles = [];
  for (let i = 0; i < 5; i++) {
    mockPoles.push(mockPole);
  }
  console.log(mockPoles);

  return (
    <div>
      <h1>Profile info</h1>
      <p>logged in information user: number of poles:</p>
      <div className="hader-my-poles">
        <h1>My Poles</h1>
        <button>New Pole</button>
      </div>
      <div>
        {mockPoles.map(pole => {
          <PoleCardComponent pole={pole} />;
        })}
      </div>
      <h1>My Finalized Poles</h1>
      map finished poles
    </div>
  );
};

export const CreateComponent = withRouter(Create);
