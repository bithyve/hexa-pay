import {StyleSheet, Dimensions, TextInput, TouchableOpacity} from 'react-native';
import React, {Fragment, useState} from 'react';
import {Text, Box, Button} from 'native-base';
const {height, width} = Dimensions.get('window');
import {useNavigation} from '@react-navigation/native';
import {CommonActions} from '@react-navigation/native';
import RightArrow from '../../../assets/images/icon_arrow_right.svg';

export default function SuccessScreen() {
  const navigation = useNavigation();
  return (
    <Fragment>
      <Box flex={1} bg="white" p="12" rounded="lg" marginTop={(height > 685 ? 0.8 : 0.05) * height}>
        <Box bg="#1886CA" p="20" rounded="lg">
          <Text color={'white'} textAlign={'center'}>
            Success Logo
          </Text>
        </Box>

        <Box p="12" rounded="lg">
          <Text color={'#1886CA'} fontSize={'3xl'} textAlign={'center'}>
            Success!
          </Text>
          <Text color={'black'} textAlign={'center'}>
            Your wallet has been created.
          </Text>
        </Box>
      </Box>
      <Box style={styles.boxContainer}>
        <Box style={styles.buttonContainer}>
          <Button
            style={styles.buttonStyle}
            onPress={() => navigation.dispatch(CommonActions.navigate({name: 'Home'}))}>
            <RightArrow width={25} height={25} style={{marginLeft: 5}} fill={'#fff'} />
          </Button>
        </Box>
      </Box>
    </Fragment>
  );
}

const styles = StyleSheet.create({
  buttonStyle: {
    marginLeft: 'auto',
    borderRadius: 50,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    width: 50,
    backgroundColor: '#FFBC05',
  },
  buttonContainer: {
    top: height > 720 ? -25 : -20,
    borderWidth: 3,
    marginLeft: 'auto',
    padding: 2,
    borderRadius: 50,
    width: 60,
    height: 60,
    borderColor: '#FFBC05',
  },
  boxContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    padding: '10%',
    height: height * 0.1,
    width,
    backgroundColor: 'white',
  },
});
