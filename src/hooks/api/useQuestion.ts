import { useQuery, useMutation } from '@tanstack/react-query';

import { readQuestion, createSnowman } from '@api/question';
import { IQuestionPostRequest } from '@api/types';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { queryKey } from 'src/constants/api';

export function useReadQuestion() {
  const router = useRouter();

  const [townUrl, setTownUrl] = useState<string>('');

  useEffect(() => {
    if (!router.isReady) return;
    setTownUrl(router.query.param as string);
  }, [router.isReady, router.query]);

  return useQuery(queryKey.question(townUrl), () => readQuestion(townUrl), { enabled: townUrl.length > 0 });
}

export function useCreateQuestion() {
  const router = useRouter();

  const [townUrl, setTownUrl] = useState<string>('');
  const [sender, setSender] = useState<string>('');

  useEffect(() => {
    if (!router.isReady) return;
    setTownUrl(router.query.param as string);
  }, [router.isReady, router.query]);

  return useMutation(
    (data: IQuestionPostRequest) => {
      setSender(data.sender);
      return createSnowman(townUrl, data);
    },
    {
      onSuccess: (data) => {
        setTimeout(async () => {
          router.push(
            {
              pathname: `/result/${townUrl}`,
              query: { data: JSON.stringify(data), sender: sender },
            },
            `/result/${townUrl}`,
          );
        }, 2000);
      },
    },
  );
}
