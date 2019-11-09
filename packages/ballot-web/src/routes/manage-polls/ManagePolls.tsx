import * as React from 'react';
import { Poll } from '../../models/Poll';
import { QuestionCard } from './poll-card/QuestionCard';
import { withRouter, RouteComponentProps } from 'react-router-dom';

interface CreateComponentRouterProps {}

interface CreateComponentOwnProps {}

type CreateComponentProps = RouteComponentProps<CreateComponentRouterProps> &
  CreateComponentOwnProps;

const ManagePolls = (props: CreateComponentProps) => {
  const mockPoll: Poll = {
    id: 'aldnføaehsrpoaw4borqnøo3url',
    pollPin: 123456,
    active: false,
    title: 'Test Poll',
    questions: [
      {
        id: 'ldkjfhasldfa',
        question: "Who's your daddy",
        options: ['Me', 'Myself', 'I'],
      },
    ],
  };

  const mockPolls = [];
  for (let i = 0; i < 5; i++) {
    mockPolls.push(mockPoll);
  }

  return (
    <div>
      <div className="header-my-polls">
        <div className="header-my-polls"></div>
        <div>
          {mockPolls.map(poll => (
            <div>
              <div>{poll.title}</div>
              <div>{poll.questions.map(q => q.question)}</div>
            </div>
          ))}
        </div>
        <h1>My Finalized Polls</h1>
        map finished polls
      </div>
    </div>
  );
};

export const ManagePollsComponent = withRouter(ManagePolls);
