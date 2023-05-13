import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text } from 'react-native';
import DetailsScreen from '../screens/DetailsScreen';

const Stack = createStackNavigator();

const DetailsStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Details Stack"
        component={DetailsScreen}
        options={{
          headerShown: false
        }}
      />
    </Stack.Navigator>
  );
};

export default DetailsStack;
