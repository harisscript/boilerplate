import React from 'react';
import {
  NavigationContainer,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { RootStackParamList } from '../types';
import { ROUTES } from '../routes';
import { linking } from '../linking';
import { navigationRef } from '../navigationRef';

import AuthNavigator from './AuthNavigator';
import MainTabNavigator from './MainTabNavigator';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function RootNavigator() {
  return (
    <NavigationContainer
      ref={navigationRef}
      linking={linking}
    >
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name={ROUTES.ROOT.AUTH}
          component={AuthNavigator}
        />
        <Stack.Screen
          name={ROUTES.ROOT.MAIN}
          component={MainTabNavigator}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
