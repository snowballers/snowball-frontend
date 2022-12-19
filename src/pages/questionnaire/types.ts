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
    question: number;
    totalQuestions: number;
}

export type QuestionWrapperProps = {
    finished: boolean;
    question: number; 
    currentQuestion: string; 
    currentAnswers: Answer[]; 
    selectedAnswers: number[]; 
    nextQuestion: (answer: Answer) => void;
    createPostData: () => any; // to be changed
}