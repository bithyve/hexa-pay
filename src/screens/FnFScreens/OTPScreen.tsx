import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Box, Center, Text} from 'native-base';
import React, {useCallback, useEffect, useState} from 'react';
import {Dimensions, StyleSheet, TouchableOpacity} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import KeyPad from '~components/KeyPad';
import {RootStackParamList} from '~navigation/Navigator';
import {RootState} from '~Providers';
import Line from '../../../assets/images/HomeScrn/line.svg';
import {requestOTP, verifyOTP} from '~store/actions/OTPActions';
import {useCountdown} from '~hooks/useCountDown';
import {StackActions} from '@react-navigation/native';

const {width, height} = Dimensions.get('window');

const CountDown: React.FC<{target: number; resend: () => void}> = ({target, resend}) => {
  const [, , m, s] = useCountdown(target);

  return (
    <Box style={styles.flexRow} marginY={2}>
      <Text
        opacity={0.75}
        color={'white'}
        fontFamily={'RobotoSlab-Regular'}
        fontSize={['md', 'lg']}>
        OTP code will expire in {m >= 10 ? m : '0' + (m < 0 ? 0 : m.toString())}:
        {s >= 10 ? s : '0' + (s < 0 ? 0 : s.toString())}{' '}
      </Text>
      <TouchableOpacity disabled={m + s > 0} onPress={resend}>
        <Text
          opacity={m + s > 0 ? 0.5 : 1}
          color={'#FABC05'}
          fontFamily={'RobotoSlab-Regular'}
          fontSize={['md', 'lg']}>
          Resend code
        </Text>
      </TouchableOpacity>
    </Box>
  );
};

const OTPScreen: React.FC<NativeStackScreenProps<RootStackParamList, 'OTP'>> = ({
  route,
  navigation,
}) => {
  const dispatcher = useDispatch();

  const verified = useSelector((state: RootState) => state.otp.verified);

  const time = useSelector((state: RootState) => state.otp.reqTimes);

  const lastTime = useSelector((state: RootState) => state.otp.lastTime);

  const [target, setTarget] = useState<number>(Date.now());

  const [passcode, setPasscode] = useState<string>('');

  const [passcode1, setPasscode1] = useState<string>('');

  const [passcode2, setPasscode2] = useState<string>('');

  const [passcode3, setPasscode3] = useState<string>('');

  const [passcode4, setPasscode4] = useState<string>('');

  useEffect(() => {
    if (verified) {
      navigation.dispatch(StackActions.pop());
      navigation.dispatch(StackActions.replace('FnFHome'));
    }
  }, [verified]);

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
      }
    },
    [passcode]
  );

  const OTPReq = () => {
    if (lastTime !== null) {
      const diff = Date.now() - lastTime;
      console.log(diff / 60000);
      if (diff / 60000 > (time < 20 ? 2 : (time - 20) * 5 + 20)) {
        dispatcher(requestOTP(route.params.num));
        setTarget(Date.now() + 120000);
      } else {
        setTarget(lastTime + 120000);
      }
    } else {
      dispatcher(requestOTP(route.params.num));
      setTarget(Date.now() + 30000);
    }
  };

  useEffect(() => {
    OTPReq();
  }, []);

  useEffect(() => {
    if (passcode.length === 4) {
      dispatcher(verifyOTP(passcode));
    }
  }, [passcode]);

  return (
    <Center style={styles.wrapper}>
      <Box style={styles.innerWrapper}>
        <Text color={'white'} marginY={2} fontSize={['2xl', '3xl']} fontFamily={'RobotoSlab-Bold'}>
          OTP Verification
        </Text>
        <Box style={styles.flexRow} marginY={2}>
          <Text color={'white'} fontFamily={'RobotoSlab-Regular'} fontSize={['sm', 'md']}>
            Input OTP code sent to{' '}
          </Text>
          <Text color={'white'} fontFamily={'RobotoSlab-Bold'}>
            {route.params.num}
          </Text>
        </Box>
        <Box style={styles.boxesWrapper}>
          <Box style={styles.box}>
            <Text fontFamily={'RobotoSlab-Bold'} fontSize={0.08 * width}>
              {passcode.length == 0 ? (
                <Line height={0.075 * width} width={0.075 * width} />
              ) : (
                passcode1
              )}
            </Text>
          </Box>
          <Box style={styles.box}>
            <Text fontFamily={'RobotoSlab-Bold'} fontSize={0.08 * width}>
              {passcode.length == 1 ? (
                <Line height={0.075 * width} width={0.075 * width} />
              ) : (
                passcode2
              )}
            </Text>
          </Box>
          <Box style={styles.box}>
            <Text fontFamily={'RobotoSlab-Bold'} fontSize={0.08 * width}>
              {passcode.length == 2 ? (
                <Line height={0.075 * width} width={0.075 * width} />
              ) : (
                passcode3
              )}
            </Text>
          </Box>
          <Box style={styles.box}>
            <Text fontFamily={'RobotoSlab-Bold'} fontSize={0.08 * width}>
              {passcode.length == 3 ? (
                <Line height={0.075 * width} width={0.075 * width} />
              ) : (
                passcode4
              )}
            </Text>
          </Box>
        </Box>
        <CountDown target={target} resend={OTPReq} />
      </Box>
      <KeyPad onPressNumber={onPressNumber} />
    </Center>
  );
};

export default OTPScreen;

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#4286F5',
    width,
    height,
  },
  innerWrapper: {
    display: 'flex',
    justifyContent: 'center',
    width: width * 0.9,
    height: 0.45 * height,
  },
  boxesWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '70%',
    marginVertical: height > 685 ? 8 : 0.01 * height,
  },
  box: {
    elevation: 10,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: 'red',
    backgroundColor: 'white',
    width: 0.1 * width,
    height: 0.13 * width,
    borderRadius: 5,
  },
  flexRow: {
    display: 'flex',
    flexDirection: 'row',
  },
});
