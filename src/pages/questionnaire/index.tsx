import type { NextPage } from 'next';

import Container from '@components/Container';
import { ProgressBar, QuestionWrapper } from './components';
import useQuestionnaire from './useQuestionnaire';

const Questionnaire: NextPage = () => {
  const { disabled, finished, question, currentQuestion, currentAnswers, selectedAnswers, totalQuestions, prevQuestion, nextQuestion, createPostData } =
    useQuestionnaire();
  const progressBarProps = { finished, question, totalQuestions };
  const questionWrapperProps = { finished, question, currentQuestion, currentAnswers, selectedAnswers, nextQuestion, createPostData };

  return (
    <Container bgColor="bg-primary-100">
      <div className="relative">
        <button
          type="button"
          className="absolute text-primary-600 text-2xl p-6 text-center inline-flex items-center"
          disabled={disabled}
          onClick={() => {
            prevQuestion();
          }}
        >
          <span>{'<'}</span>
        </button>
        <p className="relative text-center w-1/2 mx-auto py-7 text-primary-600">눈사람 만드는 중...</p>
      </div>
      <div className="w-4/5 m-auto overflow-visible">
        <ProgressBar {...progressBarProps} />
      </div>
      <QuestionWrapper {...questionWrapperProps} />
    </Container>
  );
};

export default Questionnaire;
