import { useQuery, useMutation } from '@tanstack/react-query';

import { getQuestion, createSnowman } from '@api/question';
import { IQuestionPostRequest } from '@api/types';

export function useQuestion(url: string) {
  const { data, isLoading, error } = useQuery(['question', url], () => getQuestion(url));
  const { data: create, isLoading: isCreating, error: createError } = useMutation((data: IQuestionPostRequest) => createSnowman(url, data));

  return {
    data,
    isLoading,
    error,
    create,
    isCreating,
    createError
  };
}
