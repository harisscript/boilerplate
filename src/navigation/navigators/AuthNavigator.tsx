import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ROUTES } from '../routes';
import { AuthStackParamList } from '../types';

import LoginScreen from '@/features/auth/LoginScreen';
import RegisterScreen from '@/features/auth/RegisterScreen';

const Stack = createNativeStackNavigator<AuthStackParamList>();

export default function AuthNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animation: 'slide_from_right',
      }}
    >
      <Stack.Screen
        name={ROUTES.AUTH.LOGIN}
        component={LoginScreen}
      />
      <Stack.Screen
        name={ROUTES.AUTH.REGISTER}
        component={RegisterScreen}
      />
    </Stack.Navigator>
  );
}
