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
    <div key={props.pole.id}>
      <h1>{props.pole.title}</h1>
      <h2>{props.pole.queries[0].question}</h2>
    </div>
  );
};

export const PoleCardComponent = withRouter(PoleCard);
