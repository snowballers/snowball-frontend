import type { NextPage } from 'next';
import { useState } from 'react';

import Container from '@components/Container';
import { ProgressBar, QuestionWrapper } from './components';

const Questionnaire: NextPage = () => {
  const [question, setQuestion] = useState<number>(1);
  const totalQuestions = 2;

  return (
    <Container bgColor="bg-primary-100">
      <div>
        <button
          type="button"
          className="text-primary-900 border border-blue-700 rounded-full text-2xl p-6 text-center inline-flex items-center"
          disabled={question === 1 ? true : false}
          onClick={() => setQuestion((prev) => (prev === 1 ? prev : prev - 1))}
        >
          <span>{'<'}</span>
        </button>
      </div>
      <div className="w-4/5 m-auto">
        <ProgressBar question={question} totalQuestions={totalQuestions} />
      </div>
      <QuestionWrapper question={question} setQuestion={setQuestion} totalQuestions={totalQuestions} />
    </Container>
  );
};

export default Questionnaire;
