import { useMutation } from '@tanstack/react-query';

import { createLetter } from '@api/letter';
import { ILetterPostRequest } from '@api/types';

export function useLetter(url: string) {
  const { data: create, isLoading: isCreating, error: createError } = useMutation((data: ILetterPostRequest) => createLetter(url, data));

  return {
    create,
    isCreating,
    createError
  };
}
