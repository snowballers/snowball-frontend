import { useQuery } from '@tanstack/react-query';

import { getSnowman } from '@api/snowman';

export function useSnowman(id: number) {
  const { data, isLoading, error } = useQuery(['snowman', id], () => getSnowman(id));

  return {
    data,
    isLoading,
    error
  };
}
