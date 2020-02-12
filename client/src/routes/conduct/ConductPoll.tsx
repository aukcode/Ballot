import * as React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { backendAddress } from '../../config';
import { Question } from '../../models/Question';

enum ErrorMessage {
    QUESTION_NOT_FOUND = 'Question not found',
    USER_NOT_FOUND = 'User not found. Are you sure you are logged in?',
    SERVER_ERROR = 'There was an error connecting to the server',
  }

interface ConductPollComponentRouterProps {
    pollId: string;
  }
  
interface ConductPollComponentOwnProps {}

type props = RouteComponentProps<ConductPollComponentRouterProps> &
ConductPollComponentOwnProps;

const ConductPoll = (props: props) => {
    const [pollTitle, setPollTitle] = useState<string>('');
    const [questions, setQuestions] = useState<Question[]>([]);
    const [errorMessage, setErrorMessage] = useState<string>('');
    const [currentQuestion, setCurrentQuestion] = useState<number>(0);

    const pollId = props.match.params.pollId;

    useEffect(() => {
          try {
            const fetchPoll = async () => {
              const result = await fetch(
                `${backendAddress}/api/polls/${pollId}`,
                {
                  method: 'GET',
                }
              );
              result
                .json()
                .then(res => {
                  setQuestions(res.questions);
                  console.log(res.questions)
                  setPollTitle(res.title);
                })
                .catch(err =>
                  setErrorMessage(`${ErrorMessage.QUESTION_NOT_FOUND}: ${err}`)
                );
            };
            fetchPoll();
          } catch (err) {
            setErrorMessage(`${ErrorMessage.SERVER_ERROR}: ${err}`);
          }
      }, [pollId]);

      const renderCurrentQuestion = () => {
          return (
              <div>
                  <p>{questions[0].question}</p>
              </div>
          )
      }


    return (
        <div className="flex justify-center mt-8">
            <p className="text-2xl">{pollTitle}</p>
            {questions.map(question => question.question)}
            
        </div>
    )
};

export const ConductPollComponent = withRouter(ConductPoll);