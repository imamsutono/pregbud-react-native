import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text } from 'react-native';
import DoctorListScreen from '../screens/DoctorListScreen';

const Stack = createStackNavigator();

const DoctorListStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Doctor List Stack"
        component={DoctorListScreen}
        options={{
          headerShown: false
        }}
      />
    </Stack.Navigator>
  );
};

export default DoctorListStack;
