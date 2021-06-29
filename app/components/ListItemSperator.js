import { styleSheets } from 'min-document';
import React from 'react';
import { View, StyleSheet } from 'react-native';
import colors from '../config/colors';

const ListItemSperator = () => {
  return <View style={styles.sperator} />;
};

const styles = StyleSheet.create({
  sperator: {
    width: '100%',
    height: 1,
    backgroundColor: colors.light,
  },
});

export default ListItemSperator;
