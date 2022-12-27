import Button from '@components/Button';

import { QuestionWrapperProps } from 'src/types/Question/types';

const QuestionWrapper = ({ finished, questionNo, currentQuestion, currentAnswers, selectedAnswers, nextQuestion, finishSnowman }: QuestionWrapperProps) => {
  return (
    <>
      {finished ? (
        <>
          <div className="pt-24 pb-16">
            <h1 className="text-xl text-center text-primary-600">모든 질문에 답변을 완료했어요!</h1>
          </div>
          <div className="h-20 flex justify-center">
            <Button width="w-4/5" text="눈사람 완성하기" selected={true} onClick={finishSnowman} />
          </div>
        </>
      ) : (
        <>
          <div className="pt-24 pb-16 w-4/5 mx-auto">
            <p className="text-xl text-center text-primary-600">{currentQuestion}</p>
          </div>
          {currentAnswers?.map((a, i) => {
            return (
              <div className="h-20 flex justify-center" key={i}>
                <Button
                  width={(a.content.length > 40 ? `text-sm` : `text-base`) + ` w-4/5`}
                  text={a.content}
                  selected={selectedAnswers[questionNo] === a.id}
                  onClick={() => {
                    nextQuestion(a);
                  }}
                />
              </div>
            );
          })}
        </>
      )}
    </>
  );
};
export default QuestionWrapper;
