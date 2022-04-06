import {StyleSheet, Text, View, Dimensions, TextInput, TouchableOpacity} from 'react-native';
import React, {Fragment} from 'react';
import {VStack, Stack, HStack, Input, FormControl} from 'native-base';
import Backdrop from '~components/Backdrop';
const {height, width} = Dimensions.get('window');
import Colors from '~theme/Colors';
import Switch from 'assets/images/switch.svg';
import Next from 'assets/images/next.svg';
import {useNavigation} from '@react-navigation/native';
import {CommonActions} from '@react-navigation/native';

export default function PasscodeScreen() {
  const navigation = useNavigation();
  const goToUserDetailsScreen = () =>
    navigation.dispatch(CommonActions.navigate({name: 'UserDetailsScreen'}));
  return (
    <Fragment>
      <Backdrop height={height} />
      <Stack style={styles.stackContainer}>
        <VStack style={styles.textContainer}>
          <Text style={styles.createPasscodeText}>Create Passcode</Text>
          <Text style={styles.fundText}>to ptotect your funds</Text>
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
            <Text style={styles.faceIdText}>Use Face ID</Text>
          </TouchableOpacity>
          <Switch />
        </HStack>
        <TouchableOpacity style={styles.nextButton} onPress={goToUserDetailsScreen}>
          <Next />
        </TouchableOpacity>
      </Stack>
    </Fragment>
  );
}

const styles = StyleSheet.create({
  stackContainer: {
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'stretch',
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
    marginTop: height * 0.31,
    marginLeft: width * 0.8,
  },
});
