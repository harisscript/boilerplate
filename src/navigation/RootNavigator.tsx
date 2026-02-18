// RootNavigator.tsx
// Stack navigator for main app flow, supports deep linking

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthNavigator from './AuthNavigator';
import MainTabNavigator from './MainTabNavigator';

const Stack = createNativeStackNavigator();

const linking = {
  prefixes: ['myapp://', 'https://myapp.com'],
  config: {
    screens: {
      Main: {
        path: 'main',
        screens: {
          Home: 'home',
          Profile: 'profile',
        },
      },
      Auth: {
        path: 'auth',
        screens: {
          Login: 'login',
          Register: 'register',
        },
      },
    },
  },
};

const RootNavigator = () => (
  <NavigationContainer linking={linking}>
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Auth" component={AuthNavigator} />
      <Stack.Screen name="Main" component={MainTabNavigator} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default RootNavigator;
