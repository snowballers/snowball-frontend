import type { NextPage } from 'next';

import Container from '@components/Container';
import { ProgressBar, QuestionWrapper, Loading, SenderWrapper } from '@components/Question';
import useQuestionPage from '@hooks/Question/useQuestionPage';

const Question: NextPage = () => {
  const {
    setSender,
    isSender,
    setIsSender,
    QUESTION_LOADING_TEXT,
    questionLoading,
    SNOWMAN_LOADING_TEXT,
    snowmanLoading,
    prevBtnDisabled,
    finished,
    questionNo,
    currentQuestion,
    currentAnswers,
    selectedAnswers,
    totalQuestions,
    isLoadingPage,
    prevQuestion,
    nextQuestion,
    finishSnowman,
  } = useQuestionPage();
  const progressBarProps = { finished, questionNo, totalQuestions };
  const questionWrapperProps = { finished, questionNo, currentQuestion, currentAnswers, selectedAnswers, nextQuestion, finishSnowman };

  if (!isSender) {
    return <SenderWrapper setSender={setSender} setIsSender={setIsSender} />;
  }

  if (snowmanLoading || isLoadingPage) {
    return <Loading type="snowman" text={SNOWMAN_LOADING_TEXT} />;
  }

  if (questionLoading) {
    return <Loading type="question" text={QUESTION_LOADING_TEXT} />;
  }

  return (
    <Container bgColor="bg-primary-100">
      <div className="relative">
        <button
          type="button"
          className="absolute text-primary-600 text-2xl p-6 text-center inline-flex items-center"
          disabled={prevBtnDisabled}
          onClick={() => {
            prevQuestion();
          }}
        >
          <span>{prevBtnDisabled ? '' : '<'}</span>
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
