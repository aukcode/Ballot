import { createContext, useContext } from 'react';
import { Result } from '../../models/Result';

export interface ActivePollContextValues {
  currentQuestion: number;
  currentResult: Result | undefined;
}

const defaultContext = <T>() => {
  return {} as T;
};

export const ActivePollContext = createContext<ActivePollContextValues>(
  defaultContext()
);
export const useActivePoll = () => useContext(ActivePollContext);
