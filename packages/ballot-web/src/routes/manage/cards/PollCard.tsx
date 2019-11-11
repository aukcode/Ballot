import * as React from 'react';
import { Poll } from '../../../models/Poll';

interface PollCardProps {
  poll: Poll;
  updatePoll: (pollId: string) => void;
  removePoll?: (pollId: string) => void;
}

export const PollCard = (props: PollCardProps) => {
  const updatePoll = () => {
    props.updatePoll(props.poll.id);
  };

  return (
    <div className="mt-8 p-4 shadow rounded-lg">
      <div className="flex justify-between">
        <h2 className="text-2xl text-gray-700">{props.poll.title}</h2>
        <div className="flex">
          <i
            onClick={updatePoll}
            className="fas fa-pen fa-lg opacity-50 hover:opacity-75 cursor-pointer"
          />
          <i className="fas fa-trash ml-8 fa-lg opacity-50 hover:opacity-75 cursor-pointer" />
        </div>
      </div>
    </div>
  );
};
