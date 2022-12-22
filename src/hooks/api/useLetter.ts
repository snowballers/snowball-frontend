import { useMutation } from '@tanstack/react-query';

import { createLetter } from '@api/letter';
import { ILetterPostRequest } from '@api/types';

export function useCreateLetter(url: string) {
  return useMutation((data: ILetterPostRequest) => createLetter(url, data));
}