import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import { sampleQuestions, sampleAnswers } from '@components/Question/SampleQuestion';
import { Question, Answer } from '../../types/Question/types';

export default function useQuestionPage() {
    const QUESTION_LOADING_TEXT = "질문을 불러오는 중입니다...";
    const SNOWMAN_LOADING_TEXT = "눈사람을 완성하는 중입니다...";
    const router = useRouter();

    const [sender, setSender] = useState<string>('');
    const [isSender, setIsSender] = useState<boolean>(false);
    const [questionLoading, setQuestionLoading] = useState<boolean>(false);
    const [snowmanLoading, setSnowmanLoading] = useState<boolean>(false);
    const [finished, setFinished] = useState<boolean>(false);
    const [disabled, setDisabled] = useState<boolean>(false);
    const [questions, setQuestions] = useState<Question[]>([]);
    const [totalQuestions, setTotalQuestions] = useState<number>(2);
    const [questionNo, setQuestionNo] = useState<number>(1);
    const [currentQuestion, setCurrentQuestion] = useState<string>('');
    const [currentAnswers, setCurrentAnswers] = useState<Answer[]>([]);
    const [selectedAnswers, setSelectedAnswers] = useState<number[]>(Array(totalQuestions).fill(-1));

    useEffect(() => {
        /*
        GET question
        setTotalQuestions(res.data.totalQuestion);
        setQuestions(res.data.questions);
        */
    }, []);

    useEffect(() => {
        if (questions.length > 0) {
            setQuestionLoading(false);
        }
    }, [questions])

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
        setSnowmanLoading(true);
        createPostData();
        // POST
    }

    return { setSender, isSender, setIsSender, QUESTION_LOADING_TEXT, questionLoading, SNOWMAN_LOADING_TEXT, snowmanLoading, totalQuestions, disabled, finished, questionNo, currentQuestion, currentAnswers, selectedAnswers, prevQuestion, nextQuestion, finishSnowman }
}