import {Box, Button, Center, Text} from 'native-base';
import React, {useCallback, useEffect, useState} from 'react';
import CountryPicker, {
  DEFAULT_THEME,
  CountryModalProvider,
  Flag,
  Country,
} from 'react-native-country-picker-modal';
import {CCType} from './CCType';
import {PhoneNumberUtil, PhoneNumberFormat as PNF} from 'google-libphonenumber';
import {Dimensions, StyleSheet, TouchableOpacity} from 'react-native';
import KeyPad from '~components/KeyPad';
import DropDown from '../../../assets/images/icon_arrow.svg';
import {RootStackParamList} from '~navigation/Navigator';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {useSelector} from 'react-redux';
import {RootState} from '~Providers';
import {StackActions} from '@react-navigation/native';

const {width, height} = Dimensions.get('window');

const phoneUtil = PhoneNumberUtil.getInstance();

const NumberScreen: React.FC<NativeStackScreenProps<RootStackParamList, 'PhoneScreen'>> = ({
  navigation,
}) => {
  const verified = useSelector((state: RootState) => state.otp.verified);

  useEffect(() => {
    if (verified) {
      navigation.dispatch(StackActions.replace('FnFHome'));
    }
  }, [verified]);

  const [num, setNum] = useState<string>('');

  const [cc, setCC] = useState<CCType>('IN');

  const [code, setCode] = useState<string>('91');

  const [er, setEr] = useState<boolean>(false);

  const [mVisible, setMVisible] = useState<boolean>(false);

  const onPressNumber = useCallback(
    (text: string) => {
      if (text === 'x') {
        setNum((num) => num.slice(0, -1));
      } else if (num.length < 10) {
        setNum((num) => num + text);
      }
    },
    [num]
  );

  const isValidNum = () => {
    try {
      const parsedNumber = phoneUtil.parse(num, cc);
      const valid = phoneUtil.isValidNumber(parsedNumber);
      setEr(!valid);
      if (valid) {
        navigation.navigate('OTP', {num: phoneUtil.format(parsedNumber, PNF.INTERNATIONAL)});
      }
    } catch (e) {
      console.log(e);
      setEr(true);
    }
  };

  const onSelect = (country: Country) => {
    setCC(country.cca2);
    setCode(country.callingCode[0]);
  };

  const renderFlagButton = () => {
    const layout = 'first';
    const flagSize = 25;
    if (layout === 'first') {
      return (
        <Box style={styles.flag}>
          <Flag countryCode={cc} flagSize={flagSize ? flagSize : DEFAULT_THEME.flagSize} />
          <DropDown />
        </Box>
      );
    }
    return <Box />;
  };

  return verified ? (
    <></>
  ) : (
    <Center style={styles.wrapper}>
      <Box style={styles.numWrapper}>
        <Text
          fontFamily={'RobotoSlab-Bold'}
          color={'white'}
          fontSize={['3xl', '4xl']}
          marginBottom={'2.5%'}>
          Enter Mobile Number
        </Text>
        <Text
          fontStyle={'italic'}
          fontFamily={'RobotoSlab-ExtraBold'}
          color={'red.500'}
          marginBottom={'2.5%'}>
          {er ? 'Invalid Phone Number try again' : ''}
        </Text>
        <Box style={styles.container}>
          <CountryModalProvider>
            <TouchableOpacity style={styles.picker} onPress={() => setMVisible(true)}>
              <CountryPicker
                onSelect={onSelect}
                withEmoji
                withFilter
                withFlag
                countryCode={cc}
                withCallingCode
                visible={mVisible}
                renderFlagButton={renderFlagButton}
                onClose={() => setMVisible(false)}
              />
              <Text
                style={styles.codeText}
                fontFamily={'RobotoSlab-Regular'}
                fontSize={['lg', 'xl']}>
                +{code}
              </Text>
            </TouchableOpacity>
          </CountryModalProvider>
          <Text style={styles.numText} fontFamily={'RobotoSlab-Regular'} fontSize={['lg', 'xl']}>
            {num}
          </Text>
        </Box>
      </Box>
      <Button style={styles.button} onPress={isValidNum}>
        <Text fontFamily={'RobotoSlab-Medium'} color={'white'} fontSize={['md', 'lg']}>
          Continue
        </Text>
      </Button>
      <KeyPad onPressNumber={onPressNumber} />
    </Center>
  );
};

export default NumberScreen;

function wp(percentage: number) {
  const value = (percentage * width) / 100;
  return Math.round(value);
}

function hp(percentage: number) {
  const value = (percentage * height) / 100;
  return Math.round(value);
}

const styles = StyleSheet.create({
  wrapper: {
    height,
    width,
    backgroundColor: '#4286F5',
  },
  numWrapper: {
    height: 'auto',
    width: 0.9 * width,
    marginTop: 'auto',
  },
  picker: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: height > 685 ? hp(6) : hp(8),
  },
  flag: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    marginEnd: 10,
    borderRightWidth: 1,
    borderRightColor: '#B0B0B0',
    height: height > 685 ? hp(6) : hp(8),
  },
  container: {
    backgroundColor: 'white',
    borderRadius: 15,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  codeText: {
    marginEnd: 10,
    color: 'rgba(32, 32, 32, 0.4)',
  },
  numText: {
    flex: 1,
    paddingStart: 20,
  },
  button: {
    backgroundColor: '#FABC05',
    padding: 20,
    borderRadius: 50,
    marginTop: hp(18),
    height: height > 685 ? hp(5.5) : hp(7),
    width: wp(90),
  },
});
