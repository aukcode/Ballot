import * as React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';

interface NewPoleComponentRouterProps {
  poleId: string;
}

interface NewPoleComponentOwnProps {}

type NewPoleComponentProps = RouteComponentProps<NewPoleComponentRouterProps> &
  NewPoleComponentOwnProps;

const NewPole = (props: NewPoleComponentProps) => {
  return (
    <div>
      <h1>Create New Pole</h1>
    </div>
  );
};

export const NewPoleComponent = withRouter(NewPole);
