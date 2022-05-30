import {Box, Center, Text} from 'native-base';
import React from 'react';
import {Dimensions, StyleSheet} from 'react-native';
import InteractBitcoin from '../../assets/images/svgs/interaction with bitcoin.svg';

export type IIntroScreen1Props = {};

const {width, height} = Dimensions.get('window');

const IntroScreen1: React.FC<IIntroScreen1Props> = ({}) => {
  return (
    <Center
      _dark={{bg: 'blueGray.900'}}
      _light={{bg: 'blueGray.50'}}
      style={styles.bg}>
      <Box
        style={{
          height: 0.4 * height,
          width,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#4287EE',
        }}>
        <InteractBitcoin />
      </Box>
      <Box style={{height: 0.6 * height, width}}>
        <Text
          fontSize={['4xl', '5xl']}
          _dark={{color: '#70A7FF'}}
          _light={{color: '#3067BF'}}
          style={{margin: '5%', textAlign: 'center', marginTop: '15%'}}>
          Secure Your Wallet
        </Text>
        <Center>
          <Text fontSize={['lg', '2xl']}>
            Keep your Bitcoin wallet secure by setting
          </Text>
          <Text fontSize={['lg', '2xl']}>
            a pin or enabling your face ID for
          </Text>
          <Text fontSize={['lg', '2xl']}>maximum security.</Text>
        </Center>
      </Box>
    </Center>
  );
};

const styles = StyleSheet.create({
  bg: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height,
    width,
  },
});

export default IntroScreen1;
