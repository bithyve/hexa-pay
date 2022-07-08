import {Box, Center, Text} from 'native-base';
import React from 'react';
import {Dimensions, StyleSheet} from 'react-native';
import ProtectWallet from '../../../assets/images/screen3.svg';
import BGTop from '../../../assets/images/HomeScrn/bgTop.svg';

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
        <BGTop style={{position: 'absolute', left: 0}} width={width} height={0.55 * height} />
        <ProtectWallet />
      </Box>
      <Box style={{height: 0.6 * height, width}}>
        <Text
          fontFamily={'RobotoSlab-ExtraBold'}
          fontSize={['2xl', '3xl']}
          _dark={{color: '#70A7FF'}}
          _light={{color: '#3067BF'}}
          style={{margin: '5%', textAlign: 'center', marginTop: 0.15 * height}}>
          Connect with family and friends
        </Text>
        <Center>
          <Text fontSize={['md', 'xl', '2xl']} textAlign="center">
            Get to connect with your close ones,
          </Text>
          <Text fontSize={['md', 'xl', '2xl']} textAlign="center">
            interact with them, also send and
          </Text>
          <Text fontSize={['md', 'xl', '2xl']} textAlign="center">
            request bitcoin from them.
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
