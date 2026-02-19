import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ROUTES } from '../routes';
import { MainTabParamList } from '../types';

import HomeScreen from '@/features/home/HomeScreen';
import ProfileScreen from '@/features/profile/ProfileScreen';

const Tab = createBottomTabNavigator<MainTabParamList>();

export default function MainTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
      }}
    >
      <Tab.Screen
        name={ROUTES.TAB.HOME}
        component={HomeScreen}
      />
      <Tab.Screen
        name={ROUTES.TAB.PROFILE}
        component={ProfileScreen}
      />
    </Tab.Navigator>
  );
}
