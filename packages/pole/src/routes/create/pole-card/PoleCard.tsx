import * as React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { Pole } from '../../../models/Pole';

interface PoleCardComponentRouteProps {}

interface PoleCardComponentOwnProps {
  pole: Pole;
}

type PoleCardComponentProps = PoleCardComponentOwnProps &
  RouteComponentProps<PoleCardComponentRouteProps>;

const PoleCard = (props: PoleCardComponentOwnProps) => {
  return (
    <div>
      <h1>{props.pole.title}</h1>
    </div>
  );
};

export const PoleCardComponent = withRouter<PoleCardComponentProps>(PoleCard);
