import { useColorScheme } from 'react-native';
import { lightColors, darkColors } from '@/constants/colors';

export const useAppTheme = () => {
  const scheme = useColorScheme();

  return scheme === 'dark' ? darkColors : lightColors;
};
