import { useQuery } from '@tanstack/react-query';

import { readSnowman } from '@api/snowman';

export function useReadSnowman(id: number) {
  return useQuery(['snowman', id], () => readSnowman(id));
}
