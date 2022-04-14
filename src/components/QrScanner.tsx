import {View} from 'native-base';
import {StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import Scaner from 'assets/images/scan.svg';
import {Dimensions} from 'react-native';
import {CommonActions, useNavigation} from '@react-navigation/native';
const {height, width} = Dimensions.get('window');

function QrScanner() {
  const navigation = useNavigation();
  const openScanner = () => {
    navigation.dispatch(CommonActions.navigate({name: 'Scanner'}));
  };
  return (
    <TouchableOpacity style={styles.scanner} onPress={openScanner}>
      <Scaner />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  scanner: {
    marginLeft: width * 0.42,
    marginTop: height * 0.01,
  },
});

export default QrScanner;
