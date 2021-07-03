import React, { useState, useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { Button, Text } from 'react-native';
import Screen from './app/components/Screen';

const Link = () => {
  const navigation = useNavigation();
  return (
    <Button
      title='Click'
      onPress={() =>
        navigation.navigate('TweetDetail', {
          id: 1,
        })
      }
    />
  );
};

const Tweet = ({ navigation }) => {
  return (
    <Screen>
      <Text>Tweet</Text>
      {/* <Button title='View Teet' onPress={() => navigation.navigate('Tweet')} /> */}
      <Link />
    </Screen>
  );
};

const TweetDetail = ({ route }) => {
  return (
    <Screen>
      <Text>Tweet Detail {route.params.id}</Text>
    </Screen>
  );
};

const Stack = createStackNavigator();

const StackNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name='Tweet' component={Tweet} />
    <Stack.Screen
      name='TweetDetail'
      component={TweetDetail}
      options={{
        headerStyle: { backgroundColor: 'tomato' },
        headerTintColor: 'white',
        headerShown: false,
      }}
    />
  </Stack.Navigator>
);

export default function App() {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
}
