import React, { useEffect, useState } from 'react';
import { sampleQuestions, sampleAnswers } from './SampleQuestion';
import { Answer } from '../types';

type Props = {
  question: number;
  setQuestion: React.Dispatch<React.SetStateAction<number>>;
  totalQuestions: number;
};

const QuestionWrapper = ({ question, setQuestion, totalQuestions }: Props) => {
  const [currentQuestion, setCurrentQuestion] = useState<string>();
  const [currentAnswers, setCurrentAnswers] = useState<Answer[]>();
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>(Array(totalQuestions).fill(-1));

  useEffect(() => {
    setCurrentQuestion(sampleQuestions.filter((q) => q.id === question)[0].content);
    setCurrentAnswers(sampleAnswers.filter((a) => a.question_id === question));
  }, [question]);

  const commonButtonStyle = 'border-solid border-2 font-medium rounded-lg text-base px-5 py-2.5 text-center mr-2 mb-2 w-4/5';
  const normalButtonStyle = 'text-primary-600 border-primary-600 bg-primary-100';
  const selectedButtonStyle = 'text-primary-100 border-primary-600 bg-primary-600';

  return (
    <>
      <div className="pt-24 pb-16">
        <h1 className="text-xl text-center text-primary-600">{currentQuestion}</h1>
      </div>
      {currentAnswers?.map((a, i) => {
        return (
          <div className="h-20 flex justify-center" key={i}>
            <button
              type="button"
              className={commonButtonStyle + ' ' + (selectedAnswers[question] === a.id ? selectedButtonStyle : normalButtonStyle)}
              onClick={() => {
                setSelectedAnswers((prev) => [...prev.slice(0, question), a.id, ...prev.slice(question + 1)]);
                setQuestion((prev) => (prev === totalQuestions ? prev : prev + 1));
              }}
            >
              {a.content}
            </button>
          </div>
        );
      })}
    </>
  );
};
export default QuestionWrapper;
