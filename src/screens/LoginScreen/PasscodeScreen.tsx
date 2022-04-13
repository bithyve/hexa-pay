import {StyleSheet, Text, View, Dimensions, TextInput, TouchableOpacity} from 'react-native';
import React, {Fragment, useContext} from 'react';
import {VStack, Stack, HStack, Input, FormControl} from 'native-base';
import Backdrop from '~components/Backdrop';
const {height, width} = Dimensions.get('window');
import Colors from '~theme/Colors';
import Switch from 'assets/images/switch.svg';
import Next from 'assets/images/next.svg';
import {LocalizationContext} from '~content/LocContext';

export default function PasscodeScreen() {
  const {translations} = useContext(LocalizationContext);
  const strings = translations['login'];
  const common = translations['common'];
  return (
    <Fragment>
      <Backdrop height={height} />
      <Stack style={styles.stackContainer}>
        <VStack style={styles.textContainer}>
          <Text style={styles.createPasscodeText}>{strings.Passcode}</Text>
          <Text style={styles.fundText}>{strings.ProtectFunds}</Text>
        </VStack>
        <View>
          <Input
            placeholder="Name"
            placeholderTextColor={Colors.white}
            size="2xl"
            variant="unstyled"
            maxW={width * 0.8}
            marginLeft={width * 0.1}
          />
        </View>
        <HStack style={styles.bottomContainer}>
          <TouchableOpacity>
            <Text style={styles.faceIdText}>{strings.FaceID}</Text>
          </TouchableOpacity>
          <Switch />
        </HStack>
        <TouchableOpacity style={styles.nextButton}>
          <Next />
        </TouchableOpacity>
      </Stack>
    </Fragment>
  );
}

const styles = StyleSheet.create({
  stackContainer: {
    flexDirection: 'column',
  },
  textContainer: {
    marginHorizontal: width * 0.1,
    marginTop: height * 0.25,
  },
  createPasscodeText: {
    color: Colors.white,
    fontSize: 19,
    paddingBottom: '1%',
  },
  fundText: {
    color: Colors.white,
    fontSize: 12,
    paddingBottom: '11%',
  },

  bottomContainer: {
    justifyContent: 'space-evenly',
    marginTop: width * 0.1,
  },
  faceIdText: {
    color: Colors.white,
    fontSize: 19,
    marginRight: width * 0.3,
  },
  nextButton: {
    marginTop: height * 0.38,
    marginLeft: width * 0.8,
  },
});
