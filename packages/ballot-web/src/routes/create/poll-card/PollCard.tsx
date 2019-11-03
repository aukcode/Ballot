import * as React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { Poll } from '../../../models/Poll';

interface PollCardComponentRouteProps {}

interface PollCardComponentOwnProps {
  poll: Poll;
}

type PollCardComponentProps = RouteComponentProps<PollCardComponentRouteProps> &
  PollCardComponentOwnProps;

const PollCard = (props: PollCardComponentProps) => {
  return (
    <div key={props.poll.id}>
      <h1>{props.poll.title}</h1>
      <h2>{props.poll.queries[0].question}</h2>
    </div>
  );
};

export const PollCardComponent = withRouter(PollCard);
