import React, { useState, useEffect } from 'react';
import { Button, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
import Screen from './app/components/Screen';
import ImageInput from './app/components/ImageInput';

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

  return (
    <Screen>
      <ImageInput
        imageUri={imageUri}
        onChangeImage={(uri) => setImageUri(uri)}
      />
    </Screen>
  );
}
