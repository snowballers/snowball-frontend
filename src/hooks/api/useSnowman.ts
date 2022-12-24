import { useQuery } from '@tanstack/react-query';

import { readSnowman } from '@api/snowman';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export function useReadSnowman() {
  const router = useRouter();

  const [id, setId] = useState<number>(-1);

  useEffect(() => {
    if (!router.isReady) return;
    setId(Number(router.query.id as string));
  }, [router.isReady, router.query]);

  return useQuery(['snowman', id], () => readSnowman(id), { enabled: id > -1 });
}