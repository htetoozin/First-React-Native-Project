import React from 'react';
import { Button } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import AppNavigator from './app/navigation/AppNavigator';
import navigationTheme from './app/navigation/navigationTheme';
import NetInfo, { useNetInfo } from '@react-native-community/netinfo';

export default function App() {
  // NetInfo.addEventListener((netInfo) => console.log(netInfo));

  const netInfo = useNetInfo();
  console.log('netInfo ', netInfo);

  return (
    <Button disabled={!netInfo.isInternetReachable} title='network button' />
  );
  // return (
  //   <NavigationContainer theme={navigationTheme} mode='modal'>
  //     <AppNavigator />
  //   </NavigationContainer>
  // );
}
