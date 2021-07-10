import React from 'react';
import { AsyncStorage, Button } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import AppNavigator from './app/navigation/AppNavigator';
import navigationTheme from './app/navigation/navigationTheme';

export default function App() {
  const demo = async () => {
    try {
      await AsyncStorage.setItem('person', JSON.stringify({ id: 1 }));
      const value = await AsyncStorage.getItem('person');
      const person = JSON.parse('person');

      console.log('person ', person);
    } catch (error) {}
  };

  return null;
  // return (
  //   <NavigationContainer theme={navigationTheme} mode='modal'>
  //     <AppNavigator />
  //   </NavigationContainer>
  // );
}
