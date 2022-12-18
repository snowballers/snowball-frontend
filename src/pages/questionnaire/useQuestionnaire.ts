import { useEffect, useState } from 'react';

import { sampleQuestions, sampleAnswers } from './components/SampleQuestion';
import { Answer } from './types';


export default function useQuestionnaire() {
    const totalQuestions = 2;
    const [finished, setFinished] = useState<boolean>(false);
    const [disabled, setDisabled] = useState<boolean>(false);
    const [question, setQuestion] = useState<number>(1);
    const [currentQuestion, setCurrentQuestion] = useState<string>('');
    const [currentAnswers, setCurrentAnswers] = useState<Answer[]>([]);
    const [selectedAnswers, setSelectedAnswers] = useState<number[]>(Array(totalQuestions).fill(-1));

    useEffect(() => {
        setDisabled(question === 1 ? true : false);
        setCurrentQuestion(sampleQuestions.filter((q) => q.id === question)[0].content);
        setCurrentAnswers(sampleAnswers.filter((a) => a.question_id === question));
    }, [question]);


    function prevQuestion() {
        finished ? setFinished(false) : setQuestion((prev) => (prev === 1 ? prev : prev - 1));
    }

    function nextQuestion(answer: Answer) {
        setSelectedAnswers((prev) => [...prev.slice(0, question), answer.id, ...prev.slice(question + 1)]);
        question === totalQuestions ? setFinished(true) : setQuestion((prev) => prev + 1);
    }

    return { totalQuestions, disabled, finished, question, currentQuestion, currentAnswers, selectedAnswers, prevQuestion, nextQuestion }
}