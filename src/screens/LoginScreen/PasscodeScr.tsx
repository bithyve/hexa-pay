import {StyleSheet, Dimensions, TouchableOpacity} from 'react-native';
import React, {Fragment, useState} from 'react';
import {Text, Input, Box, Button, FormControl, WarningOutlineIcon} from 'native-base';
const {height, width} = Dimensions.get('window');
import Colors from '~theme/Colors';
import {useNavigation} from '@react-navigation/native';
import {CommonActions} from '@react-navigation/native';
import Upload from '../../../assets/images/send.svg';
import {RFValue} from 'react-native-responsive-fontsize';
import RightArrow from '../../../assets/images/icon_arrow_right.svg';

export default function PasscodeScreen() {
  const [name, setName] = useState('');

  const [isInvalid, setInvalid] = useState<boolean>(false);

  const navigation = useNavigation();
  const goToUserDetailsScreen = () =>
    navigation.dispatch(CommonActions.navigate({name: 'UserDetailsScreen'}));

  const uploadPictureHandler = () => {
    console.log('upload button clicked');
  };

  const checkUserName = () => {
    if (name === '') {
      setInvalid(true);
      return false;
    } else {
      return true;
    }
  };

  return (
    <Fragment>
      <Box bg={'#4286F5'} height={height} paddingLeft={10}>
        <Box
          paddingTop={(height > 685 ? 0.15 : 0.1) * height}
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

        <Box paddingTop={'5%'}>
          <Text fontSize={'sm'} fontWeight={'medium'} color={'white'} letterSpacing={'lg'}>
            Profile Picture <Text color={'#B1BFCA'}>(Optional)</Text>
          </Text>
          <TouchableOpacity onPress={uploadPictureHandler} style={styles.uploadPictureButton}>
            <Upload />
            <Text style={styles.buttonText}>Upload</Text>
          </TouchableOpacity>
          <FormControl isInvalid={isInvalid}>
            <Input
              paddingTop={'15%'}
              variant="underlined"
              placeholder="Username"
              fontSize={RFValue(20)}
              maxW={width * 0.6}
              onChangeText={(value) => setName(value)}
              placeholderTextColor={'rgba(255, 255, 255, 0.3)'}
              fontFamily={'RobotoSlab-Regular'}
              value={name}
              style={styles.input}
              isRequired={true}
              color={'white'}
              borderBottomColor={'white'}
              selectionColor={'white'}
            />
            <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
              <Text color={'red.500'}>Username cannot be empty.</Text>
            </FormControl.ErrorMessage>
          </FormControl>
        </Box>
      </Box>
      <Box style={styles.buttonContainer}>
        <Button
          style={styles.buttonStyle}
          onPress={() => {
            if (checkUserName()) {
              navigation.dispatch(
                CommonActions.navigate({name: 'UserDetailScr', params: {customer_name: name}})
              );
            }
          }}>
          <RightArrow width={25} height={25} style={{marginLeft: 5}} fill={'#fff'} />
        </Button>
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
    backgroundColor: '#FFBC05',
    height: 50,
    width: 50,
  },
  buttonContainer: {
    position: 'absolute',
    borderColor: '#FFBC05',
    borderWidth: 3,
    marginLeft: 'auto',
    padding: 2,
    borderRadius: 50,
    width: 60,
    height: 60,
    top: 0.83 * height,
    left: 0.75 * width,
  },
  boxContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    padding: '10%',
    height: height * 0.1,
    width,
    backgroundColor: '#4286F5',
  },
  input: {
    color: 'white',
  },
  uploadPictureButton: {
    width: 70,
    height: 70,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    backgroundColor: '#70A3F7',
    borderWidth: 1,
    borderColor: '#fafafa',
    marginTop: 20,
    // marginLeft: width * 0.1,
  },
  buttonText: {
    color: Colors.white,
    fontSize: 10,
    // marginTop: '18%',
    // fontFamily: HexaTheme.fonts.RobotoSlabBlack,
  },
});
