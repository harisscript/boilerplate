// src/hooks/useAppTheme.ts
import { useColorScheme } from 'react-native';

export function useAppTheme() {
  const scheme = useColorScheme();
  return scheme === 'dark' ? 'dark' : 'light';
}
