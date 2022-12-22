import { useQuery, useMutation } from '@tanstack/react-query';

import { readQuestion, createSnowman } from '@api/question';
import { IQuestionPostRequest } from '@api/types';

export function useReadQuestion(url: string) {
  return useQuery(['question', url], () => readQuestion(url));
}

export function useCreateQuestion(url: string) {
  return useMutation((data: IQuestionPostRequest) => createSnowman(url, data));
}