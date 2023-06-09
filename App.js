import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigator from './src/navigators/TabNavigator';

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#25282d" barStyle="light-content" />
      <TabNavigator />
    </NavigationContainer>
  );
};

export default App;
