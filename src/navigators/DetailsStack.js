import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HeaderBackButton } from '@react-navigation/elements';
import DetailsScreen from '../screens/DetailsScreen';
import EditScreen from '../screens/EditScreen';

const Stack = createStackNavigator();

const DetailsStack = ({ navigation }) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Details Stack"
        component={DetailsScreen}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen
        name="EditStack"
        component={EditScreen}
        options={({ navigation }) => ({
          headerLeft: (props) => (
            <HeaderBackButton {...props} onPress={() => navigation.goBack()} />
          ),
          headerTitle: 'Edit'
        })}
      />
    </Stack.Navigator>
  );
};

export default DetailsStack;
