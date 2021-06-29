import React, { useState } from 'react';
import { Image, StyleSheet } from 'react-native';
import AppButton from '../components/AppButton';
import AppTextInput from '../components/AppTextInput';
import Screen from '../components/Screen';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <Screen style={styles.conatiner}>
      <Image style={styles.logo} source={require('../assets/logo-red.png')} />
      <AppTextInput
        autoCapitalize='none'
        autoCorrect={false}
        icon='email'
        keyboardType='email-address'
        placeholder='Email'
        onChangeText={(text) => setEmail(text)}
        textContentType='emailAddress'
      />
      <AppTextInput
        autoCapitalize='none'
        autoCorrect={false}
        icon='lock'
        name='password'
        onChangeText={(text) => setPassword(text)}
        placeholder='Password'
        secureTextEntry
        textContentType='password'
      />

      <AppButton title='Login' onPress={() => console.log(email, password)} />
    </Screen>
  );
};

const styles = StyleSheet.create({
  conatiner: {
    padding: 10,
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: 'center',
    marginTop: 50,
  },
});

export default LoginScreen;
