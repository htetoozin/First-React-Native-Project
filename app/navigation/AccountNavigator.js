import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AccountScreen from '../screens/AccountScreen';
import MessagesScreen from '../screens/MessagesScreen';

const Stack = createStackNavigator();

const AccountNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='Account'
        component={AccountScreen}
        options={{
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name='Messages'
        component={MessagesScreen}
        options={{
          headerTitleAlign: 'center',
        }}
      />
    </Stack.Navigator>
  );
};

export default AccountNavigator;
