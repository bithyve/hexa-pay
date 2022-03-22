import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Colors from '../common/Colors';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const BackDrop = () => {
  return <View style={styles.blueScrollView}></View>;
};

export default BackDrop;

const styles = StyleSheet.create({
  blueScrollView: {
    backgroundColor: Colors.blue2,
    width: wp('100%'),
    height: hp('62%'),
    resizeMode: 'contain',
    borderBottomLeftRadius: wp(8),
  },
});
