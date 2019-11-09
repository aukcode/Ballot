import * as React from 'react';
import { Question } from '../../../models/Question';

interface PollCardProps {
  question: Question;
  updateQuestion: (questionId: string) => void;
  removeQuestion: (questionId: string) => void;
}

export const QuestionCard = (props: PollCardProps) => {
  const updateQuestion = () => {
    props.updateQuestion(props.question.id);
  };

  const removeQuestion = () => {
    props.removeQuestion(props.question.id);
  };

  return (
    <div className="mt-8 p-4 shadow rounded-lg" key={props.question.question}>
      <div className="flex justify-between">
        <h2 className="text-2xl text-gray-700">{props.question.question}</h2>
        <div className="flex">
          <a href="#new-question-form">
            <i
              onClick={updateQuestion}
              className="fas fa-pen fa-lg opacity-50 hover:opacity-75 cursor-pointer"
            />
          </a>
          <a>
            <i
              onClick={removeQuestion}
              className="fas fa-trash ml-8 fa-lg opacity-50 hover:opacity-75 cursor-pointer"
            />
          </a>
        </div>
      </div>
      <div className="flex flex-wrap">
        {props.question.options.map(option => (
          <span className="inline-block bg-blue-200 rounded-full px-5 py-2 text-sm font-semibold m-2">
            {option}
          </span>
        ))}
      </div>
    </div>
  );
};
