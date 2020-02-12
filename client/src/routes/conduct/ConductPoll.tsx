import * as React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';

interface ConductPollComponentRouterProps {
    pollId: string;
  }
  
interface ConductPollComponentOwnProps {}

type props = RouteComponentProps<ConductPollComponentRouterProps> &
ConductPollComponentOwnProps;

const ConductPoll = (props: props) => {
    return (
        <div>lol {props.match.params.pollId}</div>
    )
};

export const ConductPollComponent = withRouter(ConductPoll);