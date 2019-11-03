import { Query } from './Query';

export interface Poll {
  id: string;
  pollPin: number;
  title: string;
  queries: Query[];
}
