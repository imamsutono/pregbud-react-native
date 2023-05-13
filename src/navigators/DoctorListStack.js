import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HeaderBackButton } from '@react-navigation/elements';
import DoctorListScreen from '../screens/DoctorListScreen';
import AppointmentScreen from '../screens/AppointmentScreen';

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
      <Stack.Screen
        name="AppointmentStack"
        component={AppointmentScreen}
        options={({ navigation }) => ({
          headerLeft: (props) => (
            <HeaderBackButton {...props} onPress={() => navigation.goBack()} />
          ),
          headerTitle: 'Buat janji temu'
        })}
      />
    </Stack.Navigator>
  );
};

export default DoctorListStack;
