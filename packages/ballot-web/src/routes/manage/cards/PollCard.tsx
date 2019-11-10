import * as React from 'react';
import { Poll } from '../../../models/Poll';

interface PollCardProps {
  poll: Poll;
  updateQuestion: (questionId: string) => void;
  removeQuestion: (questionId: string) => void;
}

export const QuestionCard = (props: PollCardProps) => {
  // const updateQuestion = () => {
  //   props.updateQuestion(props.question.id);
  // };
  //
  // const removeQuestion = () => {
  //   props.removeQuestion(props.question.id);
  // };

  return (
    <div className="mt-8 p-4 shadow rounded-lg" key={props.poll.id}>
      <div className="flex justify-between">
        <h2 className="text-2xl text-gray-700">{props.poll.title}</h2>
        <div className="flex">
          <a href="#new-question-form">
            <i className="fas fa-pen fa-lg opacity-50 hover:opacity-75 cursor-pointer" />
          </a>
          <a>
            <i className="fas fa-trash ml-8 fa-lg opacity-50 hover:opacity-75 cursor-pointer" />
          </a>
        </div>
      </div>
      <div className="flex flex-wrap">{props.poll}</div>
    </div>
  );
};
