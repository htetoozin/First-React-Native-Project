import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import * as Yup from 'yup';

import userApi from '../api/user';
import authApi from '../api/auth';
import Screen from '../components/Screen';
import {
  ErrorMessage,
  AppForm,
  AppFormField,
  SubmitButton,
} from '../components/forms';
import useAuth from '../auth/useAuth';

const validationSchema = Yup.object().shape({
  name: Yup.string().required().label('Name'),
  email: Yup.string().required().email().label('Email'),
  password: Yup.string().required().min(4).label('Password'),
});

const RegisterScreen = () => {
  const [error, setError] = useState('');
  const auth = useAuth();

  const handleSubmit = async (userInfo) => {
    const result = await userApi.register(userInfo);
    console.log('result ', result);

    if (!result.ok) {
      if (result.data) {
        setError(result.data.error);
      } else {
        setError('An unexpected error');
        console.log(result);
      }
      return;
    }

    const { data: authToken } = await authApi.login(
      userInfo.email,
      userInfo.password
    );

    auth.logIn(authToken);
  };

  return (
    <Screen style={styles.container}>
      <AppForm
        initialValues={{ name: '', email: '', password: '' }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <ErrorMessage error={error} visible={error} />
        <AppFormField
          autoCorrect={false}
          icon='account'
          name='name'
          placeholder='Name'
        />
        <AppFormField
          autoCapitalize='none'
          autoCorrect={false}
          icon='email'
          keyboardType='email-address'
          name='email'
          placeholder='Email'
          textContentType='emailAddress'
        />
        <AppFormField
          autoCapitalize='none'
          autoCorrect={false}
          icon='lock'
          name='password'
          placeholder='Password'
          secureTextEntry
          textContentType='password'
        />
        <SubmitButton title='Register' />
      </AppForm>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});

export default RegisterScreen;
