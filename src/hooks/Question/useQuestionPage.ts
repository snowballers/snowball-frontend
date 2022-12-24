import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import { Question, Answer } from '@api/types';
import { useCreateQuestion, useReadQuestion } from '@hooks/api/useQuestion';

export default function useQuestionPage() {
    const router = useRouter();

    const QUESTION_LOADING_TEXT = "질문을 불러오는 중입니다...";
    const SNOWMAN_LOADING_TEXT = "눈사람을 완성하는 중입니다...";
    
    const [townUrl, setTownUrl] = useState<string>('');
    const [sender, setSender] = useState<string>('');
    const [isSender, setIsSender] = useState<boolean>(false);
    const [isLoadingPage, setIsLoadingPage] = useState<boolean>(false);
    const [finished, setFinished] = useState<boolean>(false);
    const [prevBtnDisabled, setPrevBtnDisabled] = useState<boolean>(false);
    const [questions, setQuestions] = useState<Question[]>([]);
    const [totalQuestions, setTotalQuestions] = useState<number>(2);
    const [questionNo, setQuestionNo] = useState<number>(1);
    const [currentQuestion, setCurrentQuestion] = useState<string>('');
    const [currentAnswers, setCurrentAnswers] = useState<Answer[]>([]);
    const [selectedAnswers, setSelectedAnswers] = useState<number[]>(Array(totalQuestions).fill(-1));

    const { data, isLoading: questionLoading, error: questionError } = useReadQuestion();
    const { mutate: createSnowman, data: resultData, isLoading: snowmanLoading, error: snowmanError} = useCreateQuestion();

    useEffect(() => {
        if (!router.isReady) return;
        setTownUrl(router.query.param as string);
    }, [router.isReady, router.query]);

    useEffect(() => {
        if (questionLoading || questionError) return;
        if (!data) return;

        setTotalQuestions(data.totalQuestion);
        setQuestions(data.questions);
    }, [questionLoading, questionError, data]);

    useEffect(() => {
        if (!questions || questions.length === 0) return;

        setPrevBtnDisabled(questionNo === 1 ? true : false);
        setCurrentQuestion(questions.filter((q) => q.id === questionNo)[0].content);
        setCurrentAnswers(questions.filter((q) => q.id === questionNo)[0].answers);
    }, [questions, questionNo]);

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
            questions: selectedAnswers.slice(1).map((a, i) => ({ id: i + 1, answerId: a}))
        };
    }

    async function finishSnowman() {
        setIsLoadingPage(true);
        await createSnowman(createPostData());
    }

    return { setSender, isSender, setIsSender, QUESTION_LOADING_TEXT, questionLoading, SNOWMAN_LOADING_TEXT, snowmanLoading, totalQuestions, prevBtnDisabled, finished, questionNo, currentQuestion, currentAnswers, selectedAnswers, resultData, isLoadingPage, prevQuestion, nextQuestion, finishSnowman }
}