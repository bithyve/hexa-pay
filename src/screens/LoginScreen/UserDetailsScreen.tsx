import {StyleSheet, View, Dimensions, TouchableOpacity, Image} from 'react-native';
import React, {Fragment} from 'react';
import Backdrop from '~components/Backdrop';
import {Stack, VStack, Input, HStack, Box, Text} from 'native-base';
const {height, width} = Dimensions.get('window');
import Next from 'assets/images/next.svg';
import Colors from '~theme/Colors';
import Upload from '../../../assets/images/upload.svg';
import {useNavigation} from '@react-navigation/native';
import {CommonActions} from '@react-navigation/native';

function UserNameInput() {
  const navigation = useNavigation();
  const goToHomeScreen = () => navigation.dispatch(CommonActions.navigate({name: 'Home'}));
  const uploadPictureHandler = () => {
    console.log('upload button clicked');
  };

  return (
    <Fragment>
      <Backdrop height={height} />
      <Stack style={styles.stackContainer}>
        <VStack style={styles.textContainer}>
          <Text style={styles.addNameText}>Add your Name & Picture</Text>
          <Text style={styles.infoText}>This information is public</Text>
        </VStack>
        <TouchableOpacity onPress={uploadPictureHandler} style={styles.uploadPictureButton}>
          <Upload />
          <Text style={styles.buttonText}>Upload</Text>
        </TouchableOpacity>
        <View>
          <Input
            placeholder="Name"
            placeholderTextColor={Colors.white}
            size="2xl"
            variant="unstyled"
            maxW={width * 0.8}
            marginLeft={width * 0.1}
            marginTop={width * 0.1}
          />
        </View>
        <TouchableOpacity style={styles.nextButton} onPress={goToHomeScreen}>
          <Next />
        </TouchableOpacity>
      </Stack>
    </Fragment>
  );
}

export default UserNameInput;

const styles = StyleSheet.create({
  stackContainer: {
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'stretch',
  },
  textContainer: {
    marginHorizontal: width * 0.1,
    marginTop: height * 0.25,
    justifyContent: 'space-between',
  },
  addNameText: {
    color: Colors.white,
    fontSize: 19,
    paddingBottom: '1%',
  },
  infoText: {
    color: Colors.white,
    fontSize: 12,
    paddingBottom: '11%',
  },
  uploadPictureButton: {
    width: 100,
    height: 100,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    backgroundColor: '#70A3F7',
    borderWidth: 1,
    borderColor: '#fafafa',
    marginLeft: width * 0.1,
  },
  buttonText: {
    color: Colors.white,
    fontSize: 16,
    marginTop: '18%',
    // fontFamily: HexaTheme.fonts.RobotoSlabBlack,
  },
  nextButton: {
    marginTop: height * 0.23,
    marginLeft: width * 0.8,
  },
  uploadIcon: {
    height: 35,
    width: 55,
    backgroundColor: '#ffffff',
  },
});
