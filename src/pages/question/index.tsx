import type { NextPage } from 'next';

import Container from '@components/Container';
import { ProgressBar, QuestionWrapper } from './components';
import useQuestionnaire from './useQuestion';
import Loading from './components/Loading';

const Question: NextPage = () => {
  const {
    loading,
    disabled,
    finished,
    questionNo,
    currentQuestion,
    currentAnswers,
    selectedAnswers,
    totalQuestions,
    prevQuestion,
    nextQuestion,
    finishSnowman,
  } = useQuestionnaire();
  const progressBarProps = { finished, questionNo, totalQuestions };
  const questionWrapperProps = { finished, questionNo, currentQuestion, currentAnswers, selectedAnswers, nextQuestion, finishSnowman };

  return loading ? (
    <Loading />
  ) : (
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

export default Question;
