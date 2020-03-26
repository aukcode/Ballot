import { ActivePollContextValues } from './ActivePollContext';
import { Result } from '../../models/Result';
import { useState } from 'react';
import { backendAddress } from '../../config';
import { AnswerSet } from '../../models/AnswerSet';

export const CreateActivePollHook = (): ActivePollContextValues => {
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [activePollId, setActivePollId] = useState<string>('');
  const [respondents, setRespondents] = useState<string[]>([]);
  const [answerSets, setAnswerSets] = useState<AnswerSet[]>([]);

  const initiateNewActivePoll = () => {
    // fetch for new activepoll and set the activepollid
  };

  const addRespondent = (newRespondent: string) => {
    setRespondents([...respondents, newRespondent]);
    updateActivePollService();
  };

  const updateActivePollService = async () => {
    console.log('updateActivePollService function fired');
    console.log(respondents);

    try {
      await fetch(`${backendAddress}/api/active-poll/${activePollId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({}),
      }).catch(err => console.log(err));
    } catch (err) {
      console.log(err);
    }
  };

  return {
    currentQuestion,
    setActivePollId,
    addRespondent,
    respondents,
  };
};
