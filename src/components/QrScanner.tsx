import {StyleSheet} from 'react-native';
import {View} from 'native-base';
import React from 'react';
import Scaner from 'assets/images/scan.svg';
import {Dimensions} from 'react-native';
const {height, width} = Dimensions.get('window');

function QrScanner() {
  return (
    <View style={styles.scanner}>
      <Scaner />
    </View>
  );
}

const styles = StyleSheet.create({
  scanner: {
    marginLeft: width * 0.42,
    marginTop: height * 0.01,
  },
});

export default QrScanner;
