import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import DetailsStack from './DetailsStack';
import DoctorListStack from './DoctorListStack';
import FAQStack from './FAQStack';
import SnapUpStack from './SnapUpStack';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'Details') {
            iconName = 'apps-outline';
          } else if (route.name === 'Doctor List') {
            iconName = 'ios-people';
          } else if (route.name === 'FAQ') {
            iconName = 'ios-help-circle';
          } else if (route.name === 'Snap Up') {
            iconName = 'ios-flash';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        headerStyle: { backgroundColor: '#25282d' },
        headerTintColor: 'white',
        tabBarActiveTintColor: '#EF8C0B',
        tabBarinactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name="Details" component={DetailsStack} />
      <Tab.Screen name="Doctor List" component={DoctorListStack} />
      <Tab.Screen name="FAQ" component={FAQStack} />
      <Tab.Screen name="Snap Up" component={SnapUpStack} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
