import * as React from 'react';
import { Poll } from '../../../models/Poll';
import { useState } from 'react';
import classNames from 'classnames';

interface PollCardProps {
  poll: Poll;
  updatePoll: (pollId: string) => void;
  deletePoll: (pollId: string) => void;
}

export const PollCard = (props: PollCardProps) => {
  const [shouldShowDeletionDialog, setShouldShowDeletionDialog] = useState<
    boolean
  >(false);
  const updatePoll = () => {
    props.updatePoll(props.poll.id);
  };

  const deletePoll = () => {
    props.deletePoll(props.poll.id);
  };

  const cardClassName = classNames('mt-8 p-4 shadow rounded-t-lg', {
    'rounded-b-lg': !shouldShowDeletionDialog,
  });

  return (
    <div>
      <div className={cardClassName}>
        <div className="flex justify-between">
          <h2 className="text-2xl text-gray-700">{props.poll.title}</h2>
          <div className="flex">
            <i
              onClick={updatePoll}
              className="fas fa-pen fa-lg opacity-50 hover:opacity-75 cursor-pointer"
            />
            <i
              onClick={() => setShouldShowDeletionDialog(true)}
              className="fas fa-trash ml-8 fa-lg opacity-50 hover:opacity-75 cursor-pointer"
            />
          </div>
        </div>
      </div>
      {shouldShowDeletionDialog && (
        <div className="bg-red-500 rounded-b-lg px-4 py-2 flex justify-between">
          <p className="text-white font-bold">
            Are you sure you want to delete this poll?
          </p>
          <div className="text-white font-bold">
            <button onClick={() => setShouldShowDeletionDialog(false)}>
              Cancel
            </button>
            <button
              onClick={deletePoll}
              className="ml-4 px-2 rounded border-white border-2"
            >
              Delete
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
