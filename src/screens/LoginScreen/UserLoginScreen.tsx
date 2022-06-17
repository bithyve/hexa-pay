import {StackActions} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Box, Button, Center, Input} from 'native-base';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {RootStackParamList} from '~navigation/Navigator';
import {getUserVerified, loginRefresh} from '~store/actions/UserActions/UserActions';

export type IUserLoginScreenProps = {};

const UserLoginScreen: React.FC<NativeStackScreenProps<RootStackParamList, 'UserLoginScreen'>> = ({
  navigation,
}) => {
  const dispatcher = useDispatch();

  const [passcode, setPasscode] = useState<string>('');

  const incorrectPass = useSelector((state) => state.setupAndAuth.incorrectPasscode);

  const loginSuccessfull = useSelector((state) => state.setupAndAuth.loginSuccessfull);

  useEffect(() => {
    if (loginSuccessfull) {
      dispatcher(loginRefresh());
      navigation.dispatch(StackActions.replace('Home', {prevS: 'UserLoginScreen'}));
    }
  }, [loginSuccessfull]);

  return (
    <Center marginTop={'75%'}>
      <Box>Enter your Passcode: </Box>
      {incorrectPass === true ? <Box color="red.900">Incorrect Passcode</Box> : <Box></Box>}
      {incorrectPass === false ? (
        <Box color="green.900">DB Decrypted Successfully</Box>
      ) : (
        <Box></Box>
      )}
      <Input width={450} marginY={50} value={passcode} onChangeText={setPasscode} />
      <Button
        colorScheme={'success'}
        onPress={() => {
          dispatcher(getUserVerified(passcode));
        }}>
        GO!!
      </Button>
    </Center>
  );
};

export {UserLoginScreen};
