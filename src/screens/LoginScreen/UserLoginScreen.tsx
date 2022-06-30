import {StackActions} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Box, Center, Text} from 'native-base';
import React, {useCallback, useEffect, useState} from 'react';
import {Dimensions, StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {RootStackParamList} from '~navigation/Navigator';
import {getUserVerified, loginRefresh} from '~store/actions/UserActions/UserActions';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {RFValue} from 'react-native-responsive-fontsize';
import Line from '../../../assets/images/HomeScrn/line.svg';
import KeyPad from '~components/KeyPad';
import {RootState} from '~Providers';

export type IUserLoginScreenProps = {};

const {width, height} = Dimensions.get('window');

const UserLoginScreen: React.FC<NativeStackScreenProps<RootStackParamList, 'UserLoginScreen'>> = ({
  navigation,
}) => {
  const dispatcher = useDispatch();

  const [passcode, setPasscode] = useState<string>('');

  const [passcode1, setPasscode1] = useState<string>('');

  const [passcode2, setPasscode2] = useState<string>('');

  const [passcode3, setPasscode3] = useState<string>('');

  const [passcode4, setPasscode4] = useState<string>('');

  const incorrectPass = useSelector((state: RootState) => state.setupAndAuth.incorrectPasscode);

  const loginSuccessfull = useSelector((state: RootState) => state.setupAndAuth.loginSuccessfull);

  useEffect(() => {
    dispatcher(loginRefresh());
  }, []);

  useEffect(() => {
    if (loginSuccessfull) {
      dispatcher(loginRefresh());
      navigation.dispatch(StackActions.replace('Home', {prevS: 'UserLoginScreen'}));
    }
  }, [loginSuccessfull]);

  useEffect(() => {
    if (incorrectPass === true) {
      setPasscode('');
      setPasscode1('');
      setPasscode2('');
      setPasscode3('');
      setPasscode4('');
    }
  }, [incorrectPass]);

  useEffect(() => {
    if (passcode.length === 4) {
      dispatcher(getUserVerified(passcode));
    }
  }, [passcode]);

  const onPressNumber = useCallback(
    (text: string) => {
      let tmpPasscode = passcode;
      if (passcode.length < 4) {
        if (text != 'x') {
          tmpPasscode += text;
          setPasscode(tmpPasscode);

          if (passcode.length == 0) setPasscode1(text);
          else if (passcode.length == 1) setPasscode2(text);
          else if (passcode.length == 2) setPasscode3(text);
          else if (passcode.length == 3) setPasscode4(text);
        }
      }
      if (passcode && text == 'x') {
        setPasscode(passcode.slice(0, -1));
        if (passcode.length == 0) setPasscode1('');
        else if (passcode.length == 1) setPasscode2('');
        else if (passcode.length == 2) setPasscode3('');
        else if (passcode.length == 3) setPasscode4('');
        // setCheckAuth( false )
      }
    },
    [passcode]
  );

  const name = 'Vatsal';

  return (
    <Center paddingBottom={'15%'} height={height} bg={'#4C6AF7'}>
      <Box
        style={{
          display: 'flex',
          justifyContent: 'center',
          width: width * 0.9,
          height: 0.45 * height,
        }}>
        <Text
          fontSize={['2xl', '3xl']}
          fontFamily={'RobotoSlab-Bold'}
          color={'white'}>{`Welcome Back ${name},`}</Text>
        <Text
          color={incorrectPass === true ? 'red.500' : 'white'}
          marginY={height > 685 ? 8 : 0.01 * height}>
          {incorrectPass === true ? 'Incorrect Passcode. Try again' : 'Enter your 4-digit pin'}
        </Text>
        <Box
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '70%',
            marginVertical: height > 685 ? 8 : 0.01 * height,
          }}>
          <Box
            style={{
              elevation: 10,
              justifyContent: 'center',
              alignItems: 'center',
              shadowColor: 'red',
            }}
            bg={'white'}
            width={0.1 * width}
            height={0.13 * width}
            borderRadius={5}>
            <Text fontSize={0.08 * width}>
              {passcode.length == 0 ? (
                <Line height={0.075 * width} width={0.075 * width} />
              ) : (
                passcode1
              )}
            </Text>
          </Box>
          <Box
            style={{elevation: 10, justifyContent: 'center', alignItems: 'center'}}
            bg={'white'}
            width={0.1 * width}
            height={0.13 * width}
            borderRadius={5}>
            <Text fontSize={0.08 * width}>
              {passcode.length == 1 ? (
                <Line height={0.075 * width} width={0.075 * width} />
              ) : (
                passcode2
              )}
            </Text>
          </Box>
          <Box
            style={{elevation: 10, justifyContent: 'center', alignItems: 'center'}}
            bg={'white'}
            width={0.1 * width}
            height={0.13 * width}
            borderRadius={5}>
            <Text fontSize={0.08 * width}>
              {passcode.length == 2 ? (
                <Line height={0.075 * width} width={0.075 * width} />
              ) : (
                passcode3
              )}
            </Text>
          </Box>
          <Box
            style={{elevation: 10, justifyContent: 'center', alignItems: 'center'}}
            bg={'white'}
            width={0.1 * width}
            height={0.13 * width}
            borderRadius={5}>
            <Text fontSize={0.08 * width}>
              {passcode.length == 3 ? (
                <Line height={0.075 * width} width={0.075 * width} />
              ) : (
                passcode4
              )}
            </Text>
          </Box>
        </Box>
      </Box>
      <KeyPad onPressNumber={onPressNumber} />
    </Center>
  );
};

export {UserLoginScreen};

const styles = StyleSheet.create({
  keyPadRow: {
    flexDirection: 'row',
    height: '25%',
  },
  keyPadElementTouchable: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  keyPadElementText: {
    color: '#fff',
    fontStyle: 'normal',
  },
  keyPadWrapper: {
    height: 0.45 * height,
    width: 0.9 * width,
    marginTop: 'auto',
  },
  passcodeTextInputView: {
    flexDirection: 'row',
    marginTop: 0.045 * height,
    marginBottom: 0.015 * height,
    width: 'auto',
  },
  passcodeTextInputText: {
    color: Colors.blue,
    fontWeight: 'bold',
    fontSize: RFValue(13),
  },
  textBoxStyles: {
    borderWidth: 0.5,
    height: 0.13 * width,
    width: 0.13 * width,
    borderRadius: 7,
    marginLeft: 20,
    borderColor: Colors.borderColor,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.white,
  },
  textBoxActive: {
    height: 0.13 * width,
    width: 0.13 * width,
    borderRadius: 7,
    marginLeft: 20,
    elevation: 10,
    shadowColor: Colors.borderColor,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.white,
  },
  textStyles: {
    color: '#000',
    fontSize: RFValue(13),
    textAlign: 'center',
    lineHeight: 18,
  },
  textFocused: {
    color: '#000',
    fontSize: RFValue(13),
    textAlign: 'center',
    lineHeight: 18,
  },
});
