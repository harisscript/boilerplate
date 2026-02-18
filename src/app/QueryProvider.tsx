// src/app/QueryProvider.tsx
import React, { ReactNode } from 'react';
import { QueryClientProvider } from '@tanstack/react-query';
import queryClient from '../store/queryClient';

interface QueryProviderProps {
  readonly children: ReactNode;
}

export default function QueryProvider({ children }: QueryProviderProps) {
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
}
