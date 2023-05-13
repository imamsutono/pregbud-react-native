import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SnapUpScreen from '../screens/SnapUpScreen';

const Stack = createStackNavigator();

const SnapUpStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Snap Up Stack"
        component={SnapUpScreen}
        options={{
          headerShown: false
        }}
      />
    </Stack.Navigator>
  );
};

export default SnapUpStack;
