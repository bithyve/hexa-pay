import {StyleSheet, Dimensions, TextInput, TouchableOpacity} from 'react-native';
import React, {Fragment, useState} from 'react';
import {
  VStack,
  Stack,
  Text,
  HStack,
  Input,
  FormControl,
  View,
  Box,
  Image,
  Button,
} from 'native-base';
import Backdrop from '~components/Backdrop';
const {height, width} = Dimensions.get('window');
import Colors from '~theme/Colors';
import Switch from 'assets/images/switch.svg';
import Next from 'assets/images/next.svg';
import {useNavigation} from '@react-navigation/native';
import {CommonActions} from '@react-navigation/native';
import {RootStackParamList} from '../../navigation/Navigator';
import {StackActions} from '@react-navigation/native';
import Upload from '../../../assets/images/send.svg';
import RightArrow from '../../../assets/images/icon_arrow_right.svg';

export default function SuccessScreen() {
  const navigation = useNavigation();
  return (
    <Fragment>
      <Box bg="white" p="12" rounded="lg" height={height}>
        <Box bg="#1886CA" p="20" rounded="lg" marginTop={16}>
          <Text color={'white'} textAlign={'center'}>
            Success Logo
          </Text>
        </Box>

        <Box p="12" rounded="lg" marginTop={30}>
          <Text color={'#1886CA'} fontSize={'3xl'} textAlign={'center'}>
            Success!
          </Text>
          <Text color={'black'} textAlign={'center'}>
            Your wallet has been created.
          </Text>
        </Box>

        <Box paddingTop={150}>
          <Box style={styles.buttonContainer}>
            <Button
              style={styles.buttonStyle}
              onPress={() => navigation.dispatch(CommonActions.navigate({name: 'Home'}))}>
              <RightArrow width={25} height={25} style={{marginLeft: 5}} fill={'#fff'} />
            </Button>
          </Box>
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
    backgroundColor: '#4385F6',
  },
  buttonContainer: {
    top: height > 720 ? -25 : -20,
    borderWidth: 3,
    marginLeft: 'auto',
    padding: 2,
    borderRadius: 50,
    width: 60,
    height: 60,
    borderColor: '#4385F6',
  },
});
