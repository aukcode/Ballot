import * as React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Poll } from '../../models/Poll';
import { useAuth } from '../../api/auth/AuthContext';
import { PollCard } from './cards/PollCard';
import { RouteMap } from '../RouteMap';

enum ErrorMessage {
  USER_NOT_FOUND = 'User not found. Are you sure you are logged in?',
  SERVER_ERROR = 'There was an error connecting to the server',
}

interface ManagePollsComponentRouterProps {}

interface ManagePollsComponentOwnProps {}

type Props = RouteComponentProps<ManagePollsComponentRouterProps> &
  ManagePollsComponentOwnProps;

const ManagePolls = (props: Props) => {
  const { user } = useAuth();
  const [polls, setPolls] = useState<Poll[]>([]);
  const [errorMessage, setErrorMessage] = useState<string>('');

  useEffect(() => {
    if (user) {
      const userId = user.id;
      try {
        const fetchPolls = async () => {
          const result = await fetch(
            `http://localhost:8080/api/polls/user/${userId}`,
            {
              method: 'GET',
            }
          );
          result
            .json()
            .then(res => setPolls(res))
            .catch(err =>
              setErrorMessage(`${ErrorMessage.SERVER_ERROR}: ${err}`)
            );
        };
        fetchPolls();
        setErrorMessage('');
      } catch (err) {
        setErrorMessage(`${ErrorMessage.SERVER_ERROR}: ${err}`);
      }
    } else {
      setErrorMessage(`${ErrorMessage.USER_NOT_FOUND}`);
    }
  }, [user]);

  const renderPolls = () => {
    if (polls.length > 0) {
      return (
        <div>
          {polls
            .filter(poll => !poll.archived)
            .map(poll => {
              return (
                <div key={poll.id}>
                  <PollCard poll={poll} updatePoll={updatePoll} />
                </div>
              );
            })}
        </div>
      );
    } else {
      return (
        <p className="font-semibold text-gray-600">
          You don't have any polls yet. Click the New Poll button to start!
        </p>
      );
    }
  };

  const renderArchivedPolls = () => {
    const archivedPolls = polls.filter(poll => poll.archived);
    if (archivedPolls.length > 0) {
      return (
        <div>
          <h1 className="text-4xl border-b-2">Archived Polls</h1>
          {polls
            .filter(poll => poll.archived)
            .map(poll => {
              return (
                <div key={poll.id}>
                  <PollCard poll={poll} updatePoll={updatePoll} />
                </div>
              );
            })}
        </div>
      );
    }
  };

  const updatePoll = (pollId: string) => {
    props.history.push(RouteMap.manage.edit.createPath(pollId));
  };

  return (
    <div className="flex justify-center mt-8">
      <div className="mx-3 w-full sm:max-w-3xl p-4">
        <h1 className="text-4xl border-b-2">Your Polls</h1>
        <p className="font-bold text-red-500 mt-2">{errorMessage}</p>
        <div className="my-4">{renderPolls()}</div>

        <div className="my-4">{renderArchivedPolls()}</div>
      </div>
    </div>
  );
};

export const ManagePollsComponent = withRouter(ManagePolls);
