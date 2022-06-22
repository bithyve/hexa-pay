import {Box, Center, Text} from 'native-base';
import React from 'react';
import {Dimensions, StyleSheet} from 'react-native';
import SaveOnCloud from '../../../assets/images/screen2.svg';
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
        <SaveOnCloud />
      </Box>
      <Box style={{height: 0.6 * height, width}}>
        <Text
          fontFamily={'RobotoSlab-ExtraBold'}
          fontSize={['2xl', '3xl']}
          _dark={{color: '#70A7FF'}}
          _light={{color: '#3067BF'}}
          style={{textAlign: 'center', marginTop: 0.15 * height}}>
          Backup and Security
        </Text>
        <Text
          fontFamily={'RobotoSlab-ExtraBold'}
          fontSize={['2xl', '3xl']}
          _dark={{color: '#70A7FF'}}
          _light={{color: '#3067BF'}}
          style={{marginBottom: '5%', textAlign: 'center'}}>
          made easy
        </Text>
        <Center>
          <Text fontSize={['md', 'xl', '2xl']} textAlign="center">
            Keep your bitcoin wallet secure by
          </Text>
          <Text fontSize={['md', 'xl', '2xl']} textAlign="center">
            enabling maximum security and storing
          </Text>
          <Text fontSize={['md', 'xl', '2xl']} textAlign="center">
            your seed phrases safe
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
