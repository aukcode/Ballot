import * as React from 'react';
import { Poll } from '../../models/Poll';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { FormEvent, useState } from 'react';
import { ChangeEvent } from 'react';
import { QuestionCard } from './poll-card/QuestionCard';
import { Question } from '../../models/Question';

enum ErrorMessage {
  NO_ERROR = 'NO_ERROR',
  QUESTION_NOT_FOUND = 'Question not found',
}
const mockPoll: Poll = {
  id: 'aldnføaehsrpoaw4borqnøo3url',
  pollPin: 123456,
  title: 'Test Poll',
  questions: [
    {
      id: 'aasdfasdfasdfasdfasdfasdfasd',
      question: "Who's your daddy",
      options: ['Me', 'Myself', 'I'],
    },
    {
      id: 'adfasdfasfgadaasdfasdfasdfasdfasdf',
      question: 'Hvem skal ta over som leder?',
      options: ['Tore', 'Cato', 'Ray'],
    },
    {
      id: 'asdfasdfasdfasdfasdfasdfgthrdyhjftyjftuj',
      question: 'Hvem skal ta over som økonomiansvarlig?',
      options: ['Kim', 'Andre', 'Blank', 'Kongen', 'Sonja', 'lolololol'],
    },
  ],
};

const mockQuestions: Question[] = [];
for (let i = 0; i < mockPoll.questions.length; i++) {
  mockQuestions.push(mockPoll.questions[i]);
}

interface CreateComponentRouterProps {
  pollId: string;
}

interface CreateComponentOwnProps {}

type CreateComponentProps = RouteComponentProps<CreateComponentRouterProps> &
  CreateComponentOwnProps;

const EditPoll = (props: CreateComponentProps) => {
  const [newQuestion, setNewQuestion] = useState<string>();
  const [questions, setQuestions] = useState<Question[]>(mockQuestions);
  const [newOption, setNewOption] = useState<string>('');
  const [options, setOptions] = useState<string[]>([]);
  const [errorMessage, setErrorMessage] = useState<ErrorMessage>(
    ErrorMessage.NO_ERROR
  );

  const isCreatingNewPoll = props.match.params.pollId === 'new';

  const handleOnNewQuestionSubmitted = (e: FormEvent) => {
    e.preventDefault();
    try {
      // fetch
      if (newQuestion && newQuestion.length > 0) {
        setQuestions([
          ...questions,
          { question: newQuestion, options, id: 'asdfasdfasdf' },
        ]);
        setNewQuestion('');
        setOptions([]);
        document.getElementById('new-question-form')!.style.border = '';
      }
    } catch (err) {
      console.log('ohoi there was an error captain!');
      console.log(err);
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
        onSubmit={handleOnNewQuestionSubmitted}
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
                ></i>
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
          {!isCreatingNewPoll && (
            <h1 className="text-4xl">
              Edit Poll number {props.match.params.pollId}
            </h1>
          )}
          {questions.length > 0 && (
            <button
              className="py-2 px-8 w-auto bg-green-500 hover:bg-green-600 font-bold text-white rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Save Poll
            </button>
          )}
        </div>

        <div className="my-4">{renderQuestions()}</div>

        {questions.length > 0 && <hr className="mt-8" />}

        <div className="my-4">{renderCreateQuestionForm()}</div>
      </div>
    </div>
  );
};

export const EditPollComponent = withRouter(EditPoll);
