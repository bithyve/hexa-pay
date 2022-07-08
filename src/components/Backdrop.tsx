import {StyleSheet, Dimensions} from 'react-native';
import React from 'react';
import {Box} from 'native-base';
const {width, height: screenHeight} = Dimensions.get('window');

const Backdrop: React.FunctionComponent<{height: number}> = ({height = screenHeight}) => {
  return <Box style={[styles.backdrop, {height}]} _light={{bg: '#4D6AF6'}} />;
};

export default Backdrop;

const styles = StyleSheet.create({
  backdrop: {
    width,
    borderBottomLeftRadius: 25,
    position: 'absolute',
  },
});
