import * as React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { Pole } from '../../../models/Pole';

interface PoleCardComponentRouteProps {}

interface PoleCardComponentOwnProps {
  pole: Pole;
}

type PoleCardComponentProps = RouteComponentProps<PoleCardComponentRouteProps> &
  PoleCardComponentOwnProps;

const PoleCard = (props: PoleCardComponentProps) => {
  return (
    <div>
      <h1>{props.pole.title}</h1>
    </div>
  );
};

export const PoleCardComponent = withRouter(PoleCard);
