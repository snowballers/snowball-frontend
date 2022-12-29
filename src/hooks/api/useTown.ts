import { useQuery, useMutation } from '@tanstack/react-query';

import { readTown, updateTownName } from '@api/town';
import { queryClient } from 'src/pages/_app';
import { queryKey } from 'src/constants/api';

export function useReadTown(url: string) {
  return useQuery(queryKey.town(url), () => readTown(url), { enabled: !!url });
}

export function useUpdateTown(url: string) {
  return useMutation({
    mutationFn: updateTownName,
    onSuccess: () => {
      queryClient.invalidateQueries(queryKey.town(url));
    },
  });
}
