import type { NextPage } from 'next';

import Container from '@components/Container';
import { ProgressBar, QuestionWrapper } from './components';
import useQuestionnaire from './useQuestionnaire';

const Questionnaire: NextPage = () => {
  const { disabled, finished, question, currentQuestion, currentAnswers, selectedAnswers, totalQuestions, prevQuestion, nextQuestion } = useQuestionnaire();
  const progressBarProps = { question, totalQuestions };
  const questionWrapperProps = { finished, question, currentQuestion, currentAnswers, selectedAnswers, nextQuestion };
  return (
    <Container bgColor="bg-primary-100">
      <div>
        <button
          type="button"
          className="text-primary-900 border border-blue-700 rounded-full text-2xl p-6 text-center inline-flex items-center"
          disabled={disabled}
          onClick={() => {
            prevQuestion();
          }}
        >
          <span>{'<'}</span>
        </button>
      </div>
      <div className="w-4/5 m-auto">
        <ProgressBar {...progressBarProps} />
      </div>
      <QuestionWrapper {...questionWrapperProps} />
    </Container>
  );
};

export default Questionnaire;
