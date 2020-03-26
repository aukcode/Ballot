import { ActivePollContextValues } from './ActivePollContext';
import { Result } from '../../models/Result';
import { useState } from 'react';

export const CreateActivePollHook = (): ActivePollContextValues => {
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [currentResult, setCurrentResult] = useState<Result>();

  return {
    currentQuestion,
    currentResult,
  };
};
