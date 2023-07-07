import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Screen1 from '../screens/Screen1';
import {RootStackParamsList} from '../react-navigation-types';
import HomeTab from './HomeTabNavigator';

const Stack = createNativeStackNavigator<RootStackParamsList>();

const RootStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Screen1" component={Screen1} />
      <Stack.Screen name="Screen2" component={HomeTab} />
    </Stack.Navigator>
  );
};

export default RootStackNavigator;

