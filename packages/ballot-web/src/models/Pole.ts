import { Query } from './Query';

export interface Pole {
  id: string;
  polePin: number;
  title: string;
  queries: Query[];
}
