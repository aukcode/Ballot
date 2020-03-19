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
                  console.log(res.questions);
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
        if (questions[currentQuestion] !== undefined) {
          return (
            <div>
                <p className="text-4xl">{questions[currentQuestion].question}</p>
            </div>
          )
        } 
      }

      const renderCurrentOptions = () => {
        if (questions[currentQuestion] !== undefined) {
          return (
            <div className="ml-4 mt-8">
              {questions[currentQuestion].options.map(option => (
                    <p className="inline-block bg-blue-200 rounded-full px-5 py-2 text-xl m-2">{option}</p>
              ))}
            </div>
          )
        }
      }


    return (
        <div className="flex justify-center mt-8">
          <div className="mx-3 w-full sm:max-w-3xl p-4">
            <p className="text-4xl border-b-2 text-gray-600">{pollTitle}</p>
            <div className="mt-16 p-8 shadow rounded-lg">
              <p>{renderCurrentQuestion()}</p>
              <p>{renderCurrentOptions()}</p>
            </div>
          </div>
        </div>
    )
};

export const ConductPollComponent = withRouter(ConductPoll);