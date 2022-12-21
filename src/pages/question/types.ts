export type Question = {
    id: number;
    content: string;
}

export type Answer = {
    question_id: number;
    id: number;
    content: string;
}

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