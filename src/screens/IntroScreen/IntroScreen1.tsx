import {Box, Center, Text} from 'native-base';
import React from 'react';
import {Dimensions, StyleSheet} from 'react-native';
import InteractBitcoin from '../../../assets/images/interaction with bitcoin.svg';
import BGTop from '../../../assets/images/bgTop.svg';

export type IIntroScreen1Props = {};

const {width, height} = Dimensions.get('window');

const IntroScreen1: React.FC<IIntroScreen1Props> = ({}) => {
  return (
    <Center _dark={{bg: 'blueGray.900'}} _light={{bg: 'blueGray.50'}} style={styles.bg}>
      <Box
        style={{
          height: 0.4 * height,
          width,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <BGTop style={{position: 'absolute', left: 0}} width={width} />
        <InteractBitcoin />
      </Box>
      <Box style={{height: 0.6 * height, width}}>
        <Text
          fontFamily={'RobotoSlab-ExtraBold'}
          fontSize={['2xl', '3xl']}
          _dark={{color: '#70A7FF'}}
          _light={{color: '#3067BF'}}
          style={{margin: '5%', textAlign: 'center', marginTop: '15%'}}>
          Interact using Bitcoin
        </Text>
        <Center>
          <Text fontSize={['md', 'xl', '2xl']} textAlign="center">
            Connecting with friends and family by
          </Text>
          <Text fontSize={['md', 'xl', '2xl']} textAlign="center">
            exchanging bitcoin and through instant
          </Text>
          <Text fontSize={['md', 'xl', '2xl']} textAlign="center">
            messaging.
          </Text>
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
