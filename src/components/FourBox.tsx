import {Box, FormControl, Input, Text, WarningIcon} from 'native-base';
import React, {useEffect, useRef, useState} from 'react';
import {Dimensions, StyleSheet, TextInput} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';

export type IFourBoxProps = {
  visible: boolean;
  inv: boolean;
  setSecond: React.Dispatch<React.SetStateAction<boolean>> | undefined;
  goToSucced: ((ps: string) => void) | undefined;
  setPS: React.Dispatch<React.SetStateAction<string>>;
  erMsg: string;
};

const {width, height} = Dimensions.get('window');

const FourBox: React.FC<IFourBoxProps> = ({visible, setSecond, setPS, erMsg, inv}) => {
  const [passcodeCharOne, setPasscodeCharOne] = useState('');
  const [passcodeCharTwo, setPasscodeCharTwo] = useState('');
  const [passcodeCharThree, setPasscodeCharThree] = useState('');
  const [passcodeCharFour, setPasscodeCharFour] = useState('');

  const code1 = useRef<TextInput | null>(null);
  const code2 = useRef<TextInput | null>(null);
  const code3 = useRef<TextInput | null>(null);
  const code4 = useRef<TextInput | null>(null);

  useEffect(() => {
    const ps = passcodeCharOne + passcodeCharTwo + passcodeCharThree + passcodeCharFour;

    setPS(ps);

    if (ps.length === 4) {
      if (setSecond !== undefined) {
        setSecond(true);
      }
    }
  }, [passcodeCharOne, passcodeCharTwo, passcodeCharThree, passcodeCharFour]);

  return (
    <FormControl marginY={'3%'} isInvalid={inv} display={visible ? 'flex' : 'none'}>
      <Box style={styles.inputBox}>
        <Input
          padding={0}
          borderRadius={'lg'}
          type={'password'}
          maxLength={1}
          ref={code1}
          value={passcodeCharOne}
          width={0.1 * width}
          height={0.13 * width}
          bg={'white'}
          textAlign={'center'}
          fontSize={RFValue(18)}
          onChangeText={(e) => {
            setPasscodeCharOne(e);
            if (e.length === 1) {
              code2.current?.focus();
            }
          }}
          keyboardType={'number-pad'}
        />
        <Input
          padding={0}
          borderRadius={'lg'}
          type={'password'}
          maxLength={1}
          ref={code2}
          value={passcodeCharTwo}
          width={0.1 * width}
          height={0.13 * width}
          bg={'white'}
          alignContent={'center'}
          textAlign={'center'}
          fontSize={RFValue(18)}
          onChangeText={(e) => {
            setPasscodeCharTwo(e);
            if (e.length === 1) {
              code3.current?.focus();
            } else if (e.length === 0) {
              code1.current?.focus();
            }
          }}
          keyboardType={'number-pad'}
        />
        <Input
          padding={0}
          borderRadius={'lg'}
          type={'password'}
          maxLength={1}
          ref={code3}
          value={passcodeCharThree}
          width={0.1 * width}
          height={0.13 * width}
          bg={'white'}
          textAlign={'center'}
          fontSize={RFValue(18)}
          onChangeText={(e) => {
            setPasscodeCharThree(e);
            if (e.length === 1) {
              code4.current?.focus();
            } else if (e.length === 0) {
              code2.current?.focus();
            }
          }}
          keyboardType={'number-pad'}
        />
        <Input
          padding={0}
          borderRadius={'lg'}
          type={'password'}
          maxLength={1}
          ref={code4}
          value={passcodeCharFour}
          width={0.1 * width}
          height={0.13 * width}
          bg={'white'}
          textAlign={'center'}
          fontSize={RFValue(18)}
          onChangeText={(e) => {
            setPasscodeCharFour(e);
            if (e.length === 0) {
              code3.current?.focus();
            }
          }}
          keyboardType={'number-pad'}
        />
      </Box>
      <FormControl.ErrorMessage leftIcon={<WarningIcon size={'xs'} />}>
        <Text>{erMsg}</Text>
      </FormControl.ErrorMessage>
    </FormControl>
  );
};

export default FourBox;

const styles = StyleSheet.create({
  inputBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 0.55 * width,
  },
});
