import { Answer } from "@api/types";

export type ProgressBarProps = {
    finished: boolean;
    questionNo: number;
    totalQuestions: number;
}

export type QuestionWrapperProps = {
    finished: boolean;
    questionNo: number; 
    currentQuestion: string; 
    currentAnswers: Answer[]; 
    selectedAnswers: number[]; 
    nextQuestion: (answer: Answer) => void;
    finishSnowman: () => void; // to be changed
}