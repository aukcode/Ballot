import * as React from 'react';
import { Pole } from '../../models/Pole';
import { PoleCardComponent } from './pole-card/PoleCard';
import { RouteMap } from '../RouteMap';
import { withRouter, RouteComponentProps, Link } from 'react-router-dom';

import './Create.css';

interface CreateComponentRouterProps {}

interface CreateComponentOwnProps {}

type CreateComponentProps = RouteComponentProps<CreateComponentRouterProps> &
  CreateComponentOwnProps;

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

  return (
    <div>
      <h1>Profile info</h1>
      <p>logged in information user: number of poles:</p>
      <div className="header-my-poles">
        <h1>My Poles</h1>
        <Link to={RouteMap.create.new}>New Pole</Link>
      </div>
      <div>
        {mockPoles.map(pole => (
          <PoleCardComponent pole={pole} />
        ))}
      </div>
      <h1>My Finalized Poles</h1>
      map finished poles
    </div>
  );
};

export const CreateComponent = withRouter(Create);
