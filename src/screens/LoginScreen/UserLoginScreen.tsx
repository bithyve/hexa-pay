import {Box, Button, Center, Input} from 'native-base';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import realm from '~storage/realm/realm';
import {getUserVerified, loginRefresh} from '~store/actions/UserActions/UserActions';

export type IUserLoginScreenProps = {};

const UserLoginScreen: React.FC<IUserLoginScreenProps> = ({}) => {
  const dispatcher = useDispatch();

  const [passcode, setPasscode] = useState<string>('');

  useEffect(() => {
    dispatcher(loginRefresh());
    realm.close();
  }, []);

  const loginSuccessful = useSelector((state) => state.setupAndAuth.loginSuccessfull);

  console.log(loginSuccessful);

  return (
    <Center marginTop={'75%'}>
      <Box>Enter your Passcode: </Box>
      {loginSuccessful === false ? <Box>Incorrect Passcode</Box> : <></>}
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
