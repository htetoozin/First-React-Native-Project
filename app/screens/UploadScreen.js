import React from 'react';
import { View, Text, Modal, StyleSheet } from 'react-native';
import colors from '../config/colors';
import * as Progress from 'react-native-progress';
import LottieView from 'lottie-react-native';

const UploadScreen = ({ onDone, progress = 0, visible = false }) => {
  return (
    <Modal visible={visible}>
      <View style={styles.container}>
        {progress < 1 ? (
          <Progress.Bar
            color={colors.primary}
            progress={progress}
            width={200}
          />
        ) : (
          <LottieView
            autoPlay
            loop={false}
            onAnimationFinish={onDone}
            source={require('../assets/animations/done.json')}
            style={styles.animation}
          />
        )}
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,
    alignItems: 'center',
  },
  animation: {
    width: 150,
  },
});

export default UploadScreen;
