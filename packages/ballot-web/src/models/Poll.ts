import { Question } from './Question';

export interface Poll {
  id: string;
  pollPin: number;
  title: string;
  questions: Question[];
}
