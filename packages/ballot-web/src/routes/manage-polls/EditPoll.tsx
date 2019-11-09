import * as React from 'react';
import { Poll } from '../../models/Poll';
import { PollCardComponent } from './poll-card/PollCard';
import { withRouter, RouteComponentProps, Link } from 'react-router-dom';

interface CreateComponentRouterProps {
  pollId: string;
}

interface CreateComponentOwnProps {}

type CreateComponentProps = RouteComponentProps<CreateComponentRouterProps> &
  CreateComponentOwnProps;

const EditPoll = (props: CreateComponentProps) => {
  const mockPoll: Poll = {
    id: 'aldnføaehsrpoaw4borqnøo3url',
    pollPin: 123456,
    title: 'Test Poll',
    queries: [
      {
        question: "Who's your daddy",
        alternatives: ['Me', 'Myself', 'I'],
      },
    ],
  };

  const mockPolls = [];
  for (let i = 0; i < 5; i++) {
    mockPolls.push(mockPoll);
  }

  return (
    <div>
      <h1>Profile info</h1>
      <p>logged in information user: number of polls:</p>
      <div className="header-my-polls">
        <div className="header-my-polls">
          <h1>Edit Poll number {props.match.params.pollId}</h1>
        </div>
        <div>
          {mockPolls.map(poll => (
            <PollCardComponent poll={poll} />
          ))}
        </div>
        <h1>My Finalized Polls</h1>
        map finished polls
      </div>
    </div>
  );
};

export const CreateComponent = withRouter(EditPoll);
