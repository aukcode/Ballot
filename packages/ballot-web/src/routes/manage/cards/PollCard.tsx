import * as React from 'react';
import { Poll } from '../../../models/Poll';

interface PollCardProps {
  poll: Poll;
  updatePoll?: (pollId: string) => void;
  removePoll?: (pollId: string) => void;
}

export const PollCard = (props: PollCardProps) => {
  return (
    <div className="mt-8 p-4 shadow rounded-lg" key={props.poll.id}>
      <div className="flex justify-between">
        <h2 className="text-2xl text-gray-700">{props.poll.title}</h2>
        <div className="flex">
          <a href="#new-question-form">
            <i className="fas fa-pen fa-lg opacity-50 hover:opacity-75 cursor-pointer" />
          </a>
          <a>
            <i className="fas fa-trash ml-8 fa-lg opacity-50 hover:opacity-75 cursor-pointer" />
          </a>
        </div>
      </div>
    </div>
  );
};
