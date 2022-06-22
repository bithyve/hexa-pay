import React from 'react';
import {Box, Text} from 'native-base';
import {Dimensions, StyleSheet} from 'react-native';
import Bitbot from '../../../assets/images/HomeScrn/Bitbot.svg';

const {width, height} = Dimensions.get('window');

type BitBotProps = {};

const BitBot: React.FC<BitBotProps> = ({}) => {
  return (
    <Box style={styles.wrapper}>
      <Bitbot width={0.09 * width} height={0.09 * width} />
    </Box>
  );
};

export default BitBot;

const styles = StyleSheet.create({
  wrapper: {
    borderRadius: 0.075 * width,
    borderWidth: 4,
    borderColor: '#007CCB',
    backgroundColor: 'white',
    padding: '2%',
    height: 0.15 * width,
    width: 0.15 * width,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
