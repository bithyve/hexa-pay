import {Avatar, Box, Button, Text} from 'native-base';
import React from 'react';
import {Dimensions, StyleSheet} from 'react-native';
import ScnrIcon from '../../../assets/images/HomeScrn/scannerIcon.svg';

const {width, height} = Dimensions.get('window');

export default function TopUserProfile() {
  return (
    <Box style={styles.wrapper}>
      <Avatar style={{borderColor: 'white', borderWidth: 50}} bg="lightBlue.400">
        AB
      </Avatar>
      <Text
        fontSize={['lg', '2xl', '3xl']}
        fontFamily={'RobotoSlab-Regular'}
        style={styles.nameContainer}>
        Hi, Arya Stark
      </Text>
      <Button style={styles.scnrButton}>
        <ScnrIcon />
      </Button>
    </Box>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    flexDirection: 'row',
    paddingHorizontal: '7%',
    width: width,
    height: 0.12 * height,
    justifyContent: 'center',
    alignItems: 'center',
  },
  nameContainer: {
    flex: 1,
    color: 'white',
    paddingHorizontal: '4%',
  },
  scnrButton: {
    backgroundColor: 'none',
  },
});
