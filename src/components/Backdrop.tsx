import {StyleSheet, Dimensions} from 'react-native';
import React from 'react';
import {Box, useColorMode} from 'native-base';
const {width, height: screenHeight} = Dimensions.get('window');

const Backdrop: React.FunctionComponent<{height: number}> = ({height = screenHeight}) => {
  const {colorMode} = useColorMode();
  return <Box style={[styles.backdrop, {height}]} bg={`${colorMode}.primary`} />;
};

export default Backdrop;

const styles = StyleSheet.create({
  backdrop: {
    width,
    borderBottomLeftRadius: 25,
    position: 'absolute',
  },
});
