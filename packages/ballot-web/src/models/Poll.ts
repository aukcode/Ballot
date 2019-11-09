import { Question } from './Question';

export interface Poll {
  id: string;
  pollPin: number;
  active: boolean;
  title: string;
  questions: Question[];
}
