import React, { useState, useEffect } from 'react';
import { Button, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
import Screen from './app/components/Screen';
import ImageInputList from './app/components/ImageInputList';
import ListingDetailsScreen from './app/components/ListingDetailsScreen';
import ListingEditScreen from './app/screens/ListingEditScreen';

export default function App() {
  return <ListingEditScreen />;
}
