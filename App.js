import React, { useState, useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Button, Text } from 'react-native';
import Screen from './app/components/Screen';
import { MaterialCommunityIcons } from '@expo/vector-icons';

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
  <Stack.Navigator
    screenOptions={{
      headerStyle: { backgroundColor: 'dodgerblue' },
      headerTintColor: 'white',
    }}
  >
    <Stack.Screen name='Tweet' component={Tweet} />
    <Stack.Screen
      name='TweetDetail'
      component={TweetDetail}
      // options={{
      //   headerStyle: { backgroundColor: 'tomato' },
      //   headerTintColor: 'white',
      //   headerShown: false,
      // }}
    />
  </Stack.Navigator>
);

const Account = () => (
  <Screen>
    <Text>Account</Text>
  </Screen>
);

const Tab = createBottomTabNavigator();

const TabNavigator = () => (
  <Tab.Navigator
    tabBarOptions={{
      activeBackgroundColor: 'tomato',
      activeTintColor: 'white',
      inactiveBackgroundColor: '#eee',
      inactiveTintColor: 'black',
    }}
  >
    <Tab.Screen
      name='Feed'
      component={StackNavigator}
      options={{
        tabBarIcon: ({ size, color }) => (
          <MaterialCommunityIcons name='home' size={size} color={color} />
        ),
      }}
    />
    <Tab.Screen
      name='account'
      component={Account}
      options={{
        tabBarIcon: ({ size, color }) => (
          <MaterialCommunityIcons name='apps' size={size} color={color} />
        ),
      }}
    />
  </Tab.Navigator>
);

export default function App() {
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
}
