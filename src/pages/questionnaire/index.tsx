import type { NextPage } from 'next';
import { useState } from 'react';

import Container from '@components/Container';
import { ProgressBar, Question } from './components';

const Questionnaire: NextPage = () => {
  const [question, setQuestion] = useState<number>(0);

  return (
    <Container bgColor="bg-primary-100">
      <div className="absolute">
        <button
          type="button"
          className="text-primary-900 border border-blue-700 rounded-full text-2xl p-8 text-center inline-flex items-center"
          disabled={question === 0 ? true : false}
        >
          <span>{'<'}</span>
        </button>
      </div>

      <ProgressBar question={question} totalQuestion={4} />
      <Question />
    </Container>
  );
};

export default Questionnaire;
