import * as React from 'react';
import { Poll } from '../../models/Poll';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { FormEvent, useEffect, useState } from 'react';
import { ChangeEvent } from 'react';
import { QuestionCard } from './cards/QuestionCard';
import { Question } from '../../models/Question';

enum ErrorMessage {
  NO_ERROR = 'NO_ERROR',
  QUESTION_NOT_FOUND = 'Question not found',
}

interface CreateComponentRouterProps {
  pollId: string;
}

interface CreateComponentOwnProps {}

type CreateComponentProps = RouteComponentProps<CreateComponentRouterProps> &
  CreateComponentOwnProps;

const EditPoll = (props: CreateComponentProps) => {
  const [pollTitle, setPollTitle] = useState<string>('');
  const [newQuestion, setNewQuestion] = useState<string>();
  const [questions, setQuestions] = useState<Question[]>([]);
  const [newOption, setNewOption] = useState<string>('');
  const [options, setOptions] = useState<string[]>([]);
  const [errorMessage, setErrorMessage] = useState<ErrorMessage>(
    ErrorMessage.NO_ERROR
  );

  const isCreatingNewPoll = props.match.params.pollId === 'new';

  useEffect(() => {
    const pollId = props.match.params.pollId;
    if (!isCreatingNewPoll) {
      try {
        const fetchPoll = async () => {
          const result = await fetch(
            `http://localhost:8080/api/polls/${pollId}`,
            {
              method: 'GET',
            }
          );
          result.json().then(res => {
            return setQuestions(res.questions), setPollTitle(res.title);
          });
        };
        fetchPoll();
      } catch (err) {
        console.log(err);
      }
    }
  }, []);

  const handleOnPollSaveClicked = (e: FormEvent) => {
    e.preventDefault();
    if (props.match.params.pollId === 'new') {
      postNewPoll();
    } else {
      patchPoll();
    }
  };

  const postNewPoll = async () => {
    try {
      const result = await fetch('http://localhost:8080/api/polls/new', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          active: false,
          title: pollTitle,
          questions,
        }),
      }).catch(err => console.log(err));
    } catch (err) {
      console.log('ohoi there was an error with the server');
      console.log(err);
    }
  };

  const patchPoll = async () => {
    const pollId = props.match.params.pollId;
    try {
      const result = await fetch(`http://localhost:8080/api/polls/${pollId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: pollId,
          title: newQuestion,
          questions,
        }),
      }).catch(err => console.log(err));
    } catch (err) {
      console.log('ohoi there was an error with the server');
      console.log(err);
    }
  };

  const handleOnQuestionSubmitted = async (e: FormEvent) => {
    e.preventDefault();
    const result = await fetch('', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: newQuestion,
        questions,
      }),
    }).catch(err => console.log(err));

    if (newQuestion && newQuestion.length > 0) {
      setQuestions([
        ...questions,
        { question: newQuestion, options, id: 'asdfasdfasdf' },
      ]);
      setNewQuestion('');
      setOptions([]);
      document.getElementById('new-question-form')!.style.border = '';
    }
  };

  const updateQuestion = (questionId: string) => {
    removeQuestion(questionId);
    const question = questions.find(question => {
      return question.id === questionId;
    });
    if (question) {
      document.getElementById('new-question-form')!.style.border =
        '#3182ce solid 5px';
      setNewQuestion(question.question);
      setOptions(question.options);
    } else {
      setErrorMessage(ErrorMessage.QUESTION_NOT_FOUND);
    }
  };

  const removeOption = (option: string) => {
    return setOptions(
      options.filter(optionToBeRemoved => {
        return option !== optionToBeRemoved;
      })
    );
  };

  const removeQuestion = (questionId: string) => {
    const filteredQuestions = questions.filter(questionToBeRemoved => {
      return questionToBeRemoved.id !== questionId;
    });
    setQuestions(filteredQuestions);
  };

  const renderQuestions = () => {
    return (
      <div>
        {questions.map(question => (
          <QuestionCard
            question={question}
            removeQuestion={removeQuestion}
            updateQuestion={updateQuestion}
          />
        ))}
      </div>
    );
  };

  const renderCreateQuestionForm = () => {
    // label with input.
    return (
      <form
        onSubmit={handleOnQuestionSubmitted}
        className="shadow rounded-lg p-4"
        id="new-question-form"
      >
        <div>
          <label
            className="block text-gray-700 text-sm font-bold mb-2 mt-4"
            htmlFor="question"
          >
            Question
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            id="question"
            placeholder="Question"
            value={newQuestion}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setNewQuestion(e.target.value)
            }
          />
        </div>
        <div>
          <label
            className="block text-gray-700 text-sm font-bold mb-2 mt-4"
            htmlFor="options"
          >
            Options
          </label>
          <div className="flex flex-wrap">
            {options.map(option => (
              <span className="flex items-center bg-blue-200 rounded-full px-5 py-2 text-sm font-semibold m-2">
                <p className="mr-8 text-lg">{option}</p>
                <i
                  onClick={() => {
                    removeOption(option);
                  }}
                  className="far fa-times-circle fa-2x text-red-300 hover:text-red-400 cursor-pointer"
                />
              </span>
            ))}
          </div>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            id="options"
            placeholder="Option"
            value={newOption}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setNewOption(e.target.value)
            }
          />
          <button
            type="button"
            className="my-2 p-2 px-5 hover:bg-gray-100 shadow rounded focus:outline-none focus:shadow-outline"
            onClick={() => {
              if (newOption.length > 0) {
                setOptions([...options, newOption]);
                setNewOption('');
              }
            }}
          >
            Add option
          </button>
        </div>

        <button
          className="py-2 mt-4 w-full bg-blue-500 hover:bg-blue-600 font-bold text-white rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Add question
        </button>
      </form>
    );
  };

  return (
    <div className="flex justify-center mt-8">
      <div className="mx-3 w-full sm:max-w-3xl p-4">
        <div className="flex justify-between">
          {isCreatingNewPoll && (
            <h1 className="text-4xl">Create a new poll!</h1>
          )}
          {!isCreatingNewPoll && <h1 className="text-4xl">Update your poll</h1>}
          {questions.length > 0 && (
            <button
              onClick={handleOnPollSaveClicked}
              className="py-2 px-8 w-auto bg-green-500 hover:bg-green-600 font-bold text-white rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Save Poll
            </button>
          )}
        </div>

        <div>
          <input
            className="w-full py-4 px-2 mt-8 border-b-4 focus:border-blue-400 text-2xl focus:outline-none"
            type="text"
            value={pollTitle}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setPollTitle(e.target.value)
            }
            placeholder="Poll title"
          />
        </div>

        <div className="my-4">{renderQuestions()}</div>

        {questions.length > 0 && <hr className="mt-8" />}

        <div className="my-4">{renderCreateQuestionForm()}</div>
      </div>
    </div>
  );
};

export const EditPollComponent = withRouter(EditPoll);
