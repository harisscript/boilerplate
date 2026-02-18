// src/features/dummyApi.ts
import { useQuery } from '@tanstack/react-query';
import api from '../services/api';
import { QUERY_KEYS } from '../constants';

export function useDummyPosts() {
  return useQuery({
    queryKey: [QUERY_KEYS.dummyPosts],
    queryFn: async () => {
      const { data } = await api.get('/posts');
      return data;
    },
  });
}
