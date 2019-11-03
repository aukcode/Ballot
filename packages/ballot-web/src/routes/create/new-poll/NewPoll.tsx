import * as React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';

interface NewPollComponentRouterProps {
  pollId: string;
}

interface NewPollComponentOwnProps {}

type NewPollComponentProps = RouteComponentProps<NewPollComponentRouterProps> &
  NewPollComponentOwnProps;

const NewPoll = (props: NewPollComponentProps) => {
  return (
    <div>
      <h1>Create New Poll</h1>
    </div>
  );
};

export const NewPollComponent = withRouter(NewPoll);
