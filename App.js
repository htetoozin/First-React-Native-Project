import React, { useState, useEffect } from 'react';
import { Button, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
import Screen from './app/components/Screen';

export default function App() {
  const [imageUri, setImageUri] = useState('');

  const requestPermission = async () => {
    // const result. Permissions.askAsync(Permissions.CAMERA_ROLL, Permissions.LOCATION)

    // const result = await ImagePicker.requestCameraPermissionsAsync();
    //console.log('result ', result);
    const { granted } = await ImagePicker.requestCameraPermissionsAsync();
    if (!granted) alert('You need to enable permission to access the library!');
  };

  useEffect(() => {
    requestPermission();
  }, []);

  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync();
      console.log('select image result ', result);
      if (!result.cancelled) setImageUri(result.uri);
    } catch (error) {
      console.log('error reading an image ', error);
    }
  };

  return (
    <Screen>
      <Button title='Select Image' onPress={selectImage} />
      <Image source={{ uri: imageUri }} style={{ width: 200, height: 200 }} />
    </Screen>
  );
}
