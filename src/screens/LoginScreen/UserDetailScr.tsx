import React, {Fragment, useEffect, useState} from 'react';
import {Box, Text, Button, Switch} from 'native-base';
import {StyleSheet, Dimensions} from 'react-native';
import {CommonActions} from '@react-navigation/native';
import RightArrow from '../../../assets/images/icon_arrow_right.svg';
import {useDispatch} from 'react-redux';
import {walletSetupAction} from '~store/actions/UserActions/UserActions';
import FourBox from '~components/FourBox';

const {width, height} = Dimensions.get('window');

export default function Screen2({navigation, route}: {navigation: any; route: any}) {
  const dispatcher = useDispatch();

  const [ps1, setPS1] = useState<string>('');

  const [inv1, setInv1] = useState<boolean>(false);

  const [inv2, setInv2] = useState<boolean>(false);

  const [ps2, setPS2] = useState<string>('');

  useEffect(() => {
    if (ps1.length === 4) {
      setInv1(false);
    }
  }, [ps1]);

  const goToNxt = () => {
    if (ps1.length < 4) {
      setInv1(true);
    } else if (ps2.length < 4 || ps2 !== ps1) {
      setInv2(true);
    } else {
      try {
        dispatcher(walletSetupAction(ps1));
        navigation.dispatch(CommonActions.navigate({name: 'SuccessScreen'}));
      } catch (e) {
        console.log(e);
      }
    }
  };

  const [firstSet] = useState<boolean>(true);

  const [secondSet, setSecond] = useState<boolean>(false);

  return (
    <Fragment>
      <Box bg={'#4286F5'} flex={1} paddingLeft={10}>
        <Box
          paddingTop={(height > 685 ? 0.15 : 0.1) * height}
          _text={{
            fontSize: '4xl',
            fontWeight: 'medium',
            color: 'white',
            letterSpacing: 'lg',
          }}>
          {`Hello ${route.params.customer_name}`}
        </Box>
        <Box
          paddingTop={10}
          _text={{
            fontSize: '2xl',
            fontWeight: 'medium',
            color: 'white',
            letterSpacing: 'lg',
          }}>
          Create your Passcode
          <Text fontSize={'xs'} color="white" paddingTop={1.5}>
            Type in your 4-digit Passcode
          </Text>
        </Box>

        <FourBox
          visible={firstSet}
          setSecond={setSecond}
          goToSucced={undefined}
          setPS={setPS1}
          erMsg={'Please enter a 4 digit numeric Passcode.'}
          inv={inv1}
        />

        <Text fontSize={'xs'} color={'white'} display={secondSet ? 'flex' : 'none'}>
          Please re-enter the passcode again
        </Text>

        <FourBox
          visible={secondSet}
          setSecond={undefined}
          goToSucced={goToNxt}
          setPS={setPS2}
          erMsg={'Passcodes does not match.'}
          inv={inv2}
        />

        <Box style={styles.enableFaceId}>
          <Text color={'white'} paddingTop={11}>
            Enable face ID
          </Text>
          <Switch size="md" marginRight={8} />
        </Box>
      </Box>
      <Box style={styles.buttonContainer}>
        <Button style={styles.buttonStyle} onPress={goToNxt}>
          <RightArrow width={25} height={25} style={{marginLeft: 5}} fill={'#fff'} />
        </Button>
      </Box>
    </Fragment>
  );
}

const styles = StyleSheet.create({
  enableFaceId: {
    paddingTop: '1%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
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
  input: {
    color: 'white',
    backgroundColor: 'white',
    height: 10,
    width: 10,
    marginRight: 30,
  },
  inputPasscode: {
    flexDirection: 'row',
    marginTop: 30,
    justifyContent: 'space-between',
    width: 0.55 * width,
  },
});
