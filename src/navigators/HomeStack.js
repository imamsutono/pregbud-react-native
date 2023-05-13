import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text } from 'react-native';
import HomeScreen from '../screens/HomeScreen';

const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home Stack"
        component={HomeScreen}
        options={{
          headerShown: false
        }}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
