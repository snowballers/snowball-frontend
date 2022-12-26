import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import { Snowman } from '@api/types';
import { useCreateLetter } from '@hooks/api/useLetter';

export default function useResultPage() {
    const router = useRouter();

    const [nickname, setNickname] = useState<string>('');
    const [letter, setLetter] = useState<string>('');
    const [percent, setPercent] = useState<number>(0);
    const [snowman, setSnowman] = useState<Snowman>();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    const { mutate: createLetter, isLoading: letterLoading, error: letterError} = useCreateLetter();

    useEffect(() => {
        if (!router.isReady|| !router.query.data) return;
        const { nickname: _nickname, percent: _percent, snowman: _snowman } = JSON.parse(router.query.data as string);
        
        setNickname(_nickname);
        setPercent(_percent);
        setSnowman(_snowman);
    }, [router.isReady, router.query]);

    useEffect(() => {
        if (!nickname) return;
        setLoading(false);
    }, [nickname]); 

    useEffect(() => {
        if (router.isReady && !router.query.data) setError(true);
    }, [router])

    return { nickname, percent, snowman, letter, loading, error, setLetter, createLetter };
}