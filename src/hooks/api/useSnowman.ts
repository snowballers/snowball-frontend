import { useQuery } from '@tanstack/react-query';

import { readSnowman } from '@api/snowman';

export function useReadSnowman(id: string) {
  return useQuery(['snowman', id], () => readSnowman(id), { enabled: !!id });
}