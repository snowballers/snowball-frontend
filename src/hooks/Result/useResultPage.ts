import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import { Snowman } from '@api/types';
import { useCreateLetter } from '@hooks/api/useLetter';
import { useReadSnowman } from '@hooks/api/useSnowman';

export default function useResultPage() {
    const router = useRouter();

    const [sender, setSender] = useState<string>('');
    const [nickname, setNickname] = useState<string>('');
    const [letter, setLetter] = useState<string>('');
    const [percent, setPercent] = useState<number>(0);
    const [snowman, setSnowman] = useState<Snowman>();

    const { mutate: createLetter, isLoading: letterLoading, error: letterError} = useCreateLetter();

    useEffect(() => {
        if (!router.isReady|| !router.query.data) return;
        const { nickname: _nickname, percent: _percent, snowman: _snowman } = JSON.parse(router.query.data as string);
        
        setNickname(_nickname);
        setPercent(_percent);
        setSnowman(_snowman);
        setSender(router.query.sender as string);
    }, [router.isReady, router.query]);

    return { sender, nickname, percent, snowman, letter, setLetter, createLetter };
}