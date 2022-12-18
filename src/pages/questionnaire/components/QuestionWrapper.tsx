import Button from '@components/Button';
import { QuestionWrapperProps } from '../types';

const QuestionWrapper = ({ finished, question, currentQuestion, currentAnswers, selectedAnswers, nextQuestion }: QuestionWrapperProps) => {
  return (
    <>
      {finished ? (
        <>
          <div className="pt-24 pb-16">
            <h1 className="text-xl text-center text-primary-600">모든 질문에 답변을 완료했어요!</h1>
          </div>
          <div className="h-20 flex justify-center">
            <Button width="w-4/5" text="눈사람 완성하기" selected={true} onClick={() => {}} />
          </div>
        </>
      ) : (
        <>
          <div className="pt-24 pb-16">
            <h1 className="text-xl text-center text-primary-600">{currentQuestion}</h1>
          </div>
          {currentAnswers?.map((a, i) => {
            return (
              <div className="h-20 flex justify-center" key={i}>
                <Button
                  width="w-4/5"
                  text={a.content}
                  selected={selectedAnswers[question] === a.id}
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
