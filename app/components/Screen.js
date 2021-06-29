import React from 'react';
import Constants from 'expo-constants';
import { View, SafeAreaView, StyleSheet } from 'react-native';

const Screen = ({ children, style }) => {
  return (
    <SafeAreaView style={[styles.screen, style]}>
      <View style={[styles.view, style]}>{children}</View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    // paddingLeft: 50,
    paddingTop: Constants.statusBarHeight,
    // backgroundColor: 'red',
    flex: 1,
  },
  view: {
    flex: 1,
  },
});

export default Screen;
