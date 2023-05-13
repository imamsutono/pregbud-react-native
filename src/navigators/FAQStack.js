import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text } from 'react-native';
import FAQScreen from '../screens/FAQScreen';

const Stack = createStackNavigator();

const FAQStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="FAQ Stack"
        component={FAQScreen}
        options={{
          headerShown: false
        }}
      />
    </Stack.Navigator>
  );
};

export default FAQStack;
