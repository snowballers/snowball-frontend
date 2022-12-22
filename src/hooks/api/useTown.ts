import { useQuery, useMutation } from '@tanstack/react-query';

import { readTown, updateTownName } from '@api/town';

export function useReadTown(url: string) {
  return useQuery(['town', url], () => readTown(url));
}

export function useUpdateTown(url: string) {
  return useMutation((townName: string) => updateTownName(url, townName));
}