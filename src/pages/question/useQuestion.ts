import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import { sampleQuestions, sampleAnswers } from './components/SampleQuestion';
import { Answer } from './types';


export default function useQuestionnaire() {
    const router = useRouter();
    const totalQuestions = 2;
    const sender = router.query.sender;

    const [loading, setLoading] = useState<boolean>(false);
    const [finished, setFinished] = useState<boolean>(false);
    const [disabled, setDisabled] = useState<boolean>(false);
    const [questionNo, setQuestionNo] = useState<number>(1);
    const [currentQuestion, setCurrentQuestion] = useState<string>('');
    const [currentAnswers, setCurrentAnswers] = useState<Answer[]>([]);
    const [selectedAnswers, setSelectedAnswers] = useState<number[]>(Array(totalQuestions).fill(-1));

    useEffect(() => {
        setDisabled(questionNo === 1 ? true : false);
        setCurrentQuestion(sampleQuestions.filter((q) => q.id === questionNo)[0].content);
        setCurrentAnswers(sampleAnswers.filter((a) => a.question_id === questionNo));
    }, [questionNo]);


    function prevQuestion() {
        finished ? setFinished(false) : setQuestionNo((prev) => (prev === 1 ? prev : prev - 1));
    }

    function nextQuestion(answer: Answer) {
        setSelectedAnswers((prev) => [...prev.slice(0, questionNo), answer.id, ...prev.slice(questionNo + 1)]);
        questionNo === totalQuestions ? setFinished(true) : setQuestionNo((prev) => prev + 1);
    }

    function createPostData() {
        return {
            sender: sender,
            totalQuestion: totalQuestions,
            questions: JSON.stringify(selectedAnswers.slice(1).map((a, i) => ({ id: i + 1, answerId: a})))
        };
    }

    function finishSnowman() {
        setLoading(true);
        createPostData();
        // POST
    }

    return { loading, totalQuestions, disabled, finished, questionNo, currentQuestion, currentAnswers, selectedAnswers, prevQuestion, nextQuestion, finishSnowman }
}