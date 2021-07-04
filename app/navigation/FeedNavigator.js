import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ListingsScreen from '../screens/ListingsScreen';
import ListingDetailsScreen from '../components/ListingDetailsScreen';

const Stack = createStackNavigator();

const FeedNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Listings' component={ListingsScreen} />
      <Stack.Screen
        name='ListingDetails'
        component={ListingDetailsScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default FeedNavigator;
