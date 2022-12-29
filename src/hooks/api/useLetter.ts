import { useMutation } from '@tanstack/react-query';

import { createLetter } from '@api/letter';
import { ILetterPostRequest } from '@api/types';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export function useCreateLetter() {
  const router = useRouter();

  const [townUrl, setTownUrl] = useState<string>('');

  useEffect(() => {
    if (!router.isReady) return;
    setTownUrl(router.query.param as string);
  }, [router.isReady, router.query]);

  return useMutation(
    (data: ILetterPostRequest) => {
      return createLetter(townUrl, data);
    },
    {
      onSuccess: () => {
        router.push(`/town/${townUrl}`);
      },
    },
  );
}
