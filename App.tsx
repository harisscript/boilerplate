/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { StatusBar, StyleSheet, useColorScheme } from 'react-native';
import ToastProvider from './src/app/ToastProvider';
import QueryProvider from './src/app/QueryProvider';
import RootNavigator from './src/navigation/navigators/RootNavigator';
import { SafeAreaProvider } from 'react-native-safe-area-context';

function App() {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <SafeAreaProvider>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <QueryProvider>
        <ToastProvider>
          <RootNavigator />
        </ToastProvider>
      </QueryProvider>
    </SafeAreaProvider>
  );
}

// ...existing code...

export default App;
