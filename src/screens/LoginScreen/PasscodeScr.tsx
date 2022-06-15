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

export default function PasscodeScreen() {
  const [name, setName] = useState('');

  const navigation = useNavigation();
  const goToUserDetailsScreen = () =>
    navigation.dispatch(CommonActions.navigate({name: 'UserDetailsScreen'}));
  return (
    <Fragment>
      <Box bg={'#1886CA'} height={1000} paddingLeft={10}>
        <Box
          paddingTop={200}
          _text={{
            fontSize: '3xl',
            fontWeight: 'medium',
            color: 'white',
            letterSpacing: 'lg',
          }}>
          Welcome!
        </Box>
        <Box
          paddingTop={1}
          _text={{
            fontSize: 'sm',
            fontWeight: 'medium',
            color: 'white',
            letterSpacing: 'lg',
          }}>
          Contact Information will be made public
        </Box>

        <Box paddingTop={10}>
          <Text fontSize={'sm'} fontWeight={'medium'} color={'white'} letterSpacing={'lg'}>
            Profile Picture <Text color={'#B1BFCA'}>(Optional)</Text>
          </Text>
          {/* add image picker */}
          <Input
            paddingTop={20}
            variant="underlined"
            placeholder="Your preffered name"
            maxW={300}
            onChangeText={(value) => setName(value)}
            value={name}
            style={styles.input}
          />
        </Box>

        <Box paddingTop={300} paddingRight={10}>
          <Box style={styles.buttonContainer}>
            <Button
              style={styles.buttonStyle}
              onPress={() =>
                navigation.dispatch(
                  CommonActions.navigate({name: 'UserDetailScr', params: {customer_name: name}})
                )
              }>
              <Image alt="Alternate Text" size="xl" />
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
    backgroundColor: 'white',
    height: 50,
    width: 50,
  },
  buttonContainer: {
    borderColor: 'white',
    borderWidth: 3,
    marginLeft: 'auto',
    top: -0.05 * height,
    padding: 2,
    borderRadius: 50,
    width: 60,
    height: 60,
  },
  input: {
    color: 'white',
  },
});
