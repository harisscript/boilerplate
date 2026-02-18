// src/app/ToastProvider.tsx
import React, { ReactNode } from 'react';
import Toast from 'react-native-toast-message';

interface ToastProviderProps {
  readonly children: ReactNode;
}

export default function ToastProvider({ children }: ToastProviderProps) {
  return (
    <>
      {children}
      <Toast />
    </>
  );
}
