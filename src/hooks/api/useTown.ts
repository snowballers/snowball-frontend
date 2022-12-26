import { useQuery, useMutation } from '@tanstack/react-query';

import { readTown, updateTownName } from '@api/town';

export function useReadTown(url: string) {
  return useQuery(['town', url], () => readTown(url), { enabled: !!url });
}

export function useUpdateTown() {
  return useMutation({ mutationFn: updateTownName });
}
