import * as React from 'react';
import { Question } from '../../../models/Question';
import classNames from 'classnames';
import { useState } from 'react';

interface QuestionCardProps {
  question: Question;
  updateQuestion: (questionId: string) => void;
  removeQuestion: (questionId: string) => void;
}

export const QuestionCard = (props: QuestionCardProps) => {
  const [shouldShowDeletionDialog, setShouldShowDeletionDialog] = useState<
    boolean
  >(false);

  const questionCardClassName = classNames('mt-8 p-4 shadow rounded-t-lg', {
    'rounded-b-lg': !shouldShowDeletionDialog,
  });

  const updateQuestion = () => {
    props.updateQuestion(props.question.id);
  };

  const deleteQuestion = () => {
    props.removeQuestion(props.question.id);
  };

  return (
    <div>
      <div className="mt-8 p-4 shadow rounded-lg">
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
                onClick={() => setShouldShowDeletionDialog(true)}
                className="fas fa-trash ml-8 fa-lg opacity-50 hover:opacity-75 cursor-pointer"
              />
            </a>
          </div>
        </div>
        <div className="flex flex-wrap">
          {props.question.options.map(option => (
            <span
              key={option}
              className="inline-block bg-blue-200 rounded-full px-5 py-2 text-sm font-semibold m-2"
            >
              {option}
            </span>
          ))}
        </div>
      </div>
      {shouldShowDeletionDialog && (
        <div className="bg-red-500 rounded-b-lg px-4 py-2 flex justify-between">
          <p className="text-white font-bold">
            Are you sure you want to delete this question?
          </p>
          <div className="text-white font-bold">
            <button onClick={() => setShouldShowDeletionDialog(false)}>
              Cancel
            </button>
            <button
              onClick={deleteQuestion}
              className="ml-4 px-2 rounded border-white border-2"
            >
              Delete
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
