import React, { useState, useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { Text } from 'react-native';
import Screen from './app/components/Screen';

const Tweet = () => {
  return (
    <Screen>
      <Text>Tweet</Text>
    </Screen>
  );
};

const TweetDetail = () => {
  return (
    <Screen>
      <Tweet>Tweet Detail</Tweet>
    </Screen>
  );
};

const Stack = createStackNavigator();

const StackNavigator = () => (
  <Stack.Navigator initialRouteName='Tweet'>
    <Stack.Screen name='Tweet' component={Tweet} />
    <Stack.Screen name='TweetDetail' component={TweetDetail} />
  </Stack.Navigator>
);

export default function App() {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
}
