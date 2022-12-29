import { useQuery } from '@tanstack/react-query';

import { readSnowman } from '@api/snowman';
import { queryKey } from 'src/constants/api';

export function useReadSnowman(id: string) {
  return useQuery(queryKey.snowman(id), () => readSnowman(id), { enabled: !!id });
}
