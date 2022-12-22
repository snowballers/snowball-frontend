import { useQuery, useMutation } from '@tanstack/react-query';

import { getTown, updateTownName } from '@api/town';

export function useTown(url: string) {
  const { data, isLoading, error } = useQuery(['town', url], () => getTown(url));
  const { data: update, isLoading: isUpdating, error: updateError } = useMutation((townName: string) => updateTownName(url, townName));

  return {
    data,
    isLoading,
    error,
    update,
    isUpdating,
    updateError
  };
}
