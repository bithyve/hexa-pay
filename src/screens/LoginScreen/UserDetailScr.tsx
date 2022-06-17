// import React, {useState} from 'react';
// import {Box, Text, Input, Button, Image, Switch} from 'native-base';
// import {StyleSheet, Dimensions} from 'react-native';
// import {CommonActions} from '@react-navigation/native';
// import {useDispatch} from 'react-redux';
// import {walletSetupAction} from '~store/actions/UserActions/UserActions';

// const {width, height} = Dimensions.get('window');

// export default function Screen2({navigation, route}: {navigation: any; route: any}) {
//   const [passcode, setPasscode] = useState('');
//   // console.log(route);
//   const dispatcher = useDispatch();

//   return (
//     <>
//       {/* Screen 1 */}
//       <Box bg={'#1886CA'} height={1000} paddingLeft={10}>
//         <Box
//           paddingTop={150}
//           _text={{
//             fontSize: '4xl',
//             fontWeight: 'medium',
//             color: 'white',
//             letterSpacing: 'lg',
//           }}>
//           {`Hello ${route.params.customer_name}`}
//         </Box>
//         <Box
//           paddingTop={10}
//           _text={{
//             fontSize: '2xl',
//             fontWeight: 'medium',
//             color: 'white',
//             letterSpacing: 'lg',
//           }}>
//           Create your Passcode
//           <Text fontSize={'xs'} color="white" paddingTop={1.5}>
//             Type in your 4-digit Passcode
//           </Text>
//         </Box>

//         <Input
//           paddingTop={20}
//           type="password"
//           variant="underlined"
//           placeholder="Enter your passcode"
//           maxW={300}
//           onChangeText={(value) => setPasscode(value)}
//           value={passcode}
//           style={styles.input}
//         />

//         <Box style={styles.enableFaceId}>
//           <Text color={'white'} paddingTop={11}>
//             Enable face ID
//           </Text>
//           <Switch size="md" marginRight={8} />
//         </Box>

//         <Box paddingTop={180} paddingRight={10}>
//           <Box style={styles.buttonContainer}>
//             <Button
//               style={styles.buttonStyle}
//               onPress={() => {
//                 dispatcher(walletSetupAction(passcode));
//                 navigation.dispatch(CommonActions.navigate({name: 'Home'}));
//               }}>
//               <Image alt="Alternate Text" size="xl" />
//             </Button>
//           </Box>
//         </Box>
//       </Box>
//     </>
//   );
// }

// const styles = StyleSheet.create({
//   enableFaceId: {
//     paddingTop: 100,
//     display: 'flex',
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//   },
//   buttonStyle: {
//     marginLeft: 'auto',
//     borderRadius: 50,
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'white',
//     height: 50,
//     width: 50,
//   },
//   buttonContainer: {
//     borderColor: 'white',
//     borderWidth: 3,
//     marginLeft: 'auto',
//     top: -0.05 * height,
//     padding: 2,
//     borderRadius: 50,
//     width: 60,
//     height: 60,
//   },
//   input: {
//     color: 'white',
//   },
// });

import React, {Fragment, useState} from 'react';
import {Box, Text, Input, Button, Image, Switch} from 'native-base';
import {StyleSheet, Dimensions} from 'react-native';
import {RootStackParamList} from '../../navigation/Navigator';
import {CommonActions, StackActions} from '@react-navigation/native';
import RightArrow from '../../../assets/images/icon_arrow_right.svg';
import {useDispatch} from 'react-redux';
import {walletSetupAction} from '~store/actions/UserActions/UserActions';

const {width, height} = Dimensions.get('window');

export default function Screen2({navigation, route}: {navigation: any; route: any}) {
  const [passcode, setPasscode] = useState('');
  const [passcodeCharOne, setPasscodeCharOne] = useState('');
  const [passcodeCharTwo, setPasscodeCharTwo] = useState('');
  const [passcodeCharThree, setPasscodeCharThree] = useState('');
  const [passcodeCharFour, setPasscodeCharFour] = useState('');

  const dispatcher = useDispatch();

  const fillPasscodeAndNavigate = () => {
    setPasscode(passcodeCharOne + passcodeCharTwo + passcodeCharThree + passcodeCharFour);
    dispatcher(walletSetupAction(passcode));
    navigation.dispatch(CommonActions.navigate({name: 'SuccessScreen'}));
  };

  return (
    <Fragment>
      <Box bg={'#1886CA'} height={height * 0.905} paddingLeft={10}>
        <Box
          paddingTop={150}
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

        <Box width={300} style={styles.inputPasscode}>
          <Input
            type="password"
            variant="underlined"
            minW={8}
            maxW={8}
            marginRight={2}
            onChangeText={(value) => setPasscodeCharOne(value)}
            value={passcodeCharOne}
            style={styles.input}
            bg={'white'}
            borderRadius={5}
            maxLength={1}
          />
          <Input
            type="password"
            variant="underlined"
            minW={8}
            maxW={8}
            marginRight={2}
            onChangeText={(value) => setPasscodeCharTwo(value)}
            value={passcodeCharTwo}
            style={styles.input}
            bg={'white'}
            borderRadius={5}
            maxLength={1}
          />
          <Input
            type="password"
            variant="underlined"
            minW={8}
            maxW={8}
            marginRight={2}
            onChangeText={(value) => setPasscodeCharThree(value)}
            value={passcodeCharThree}
            style={styles.input}
            bg={'white'}
            borderRadius={5}
            maxLength={1}
          />
          <Input
            type="password"
            variant="underlined"
            minW={8}
            maxW={8}
            marginRight={2}
            onChangeText={(value) => setPasscodeCharFour(value)}
            value={passcodeCharFour}
            h={16}
            bg={'white'}
            borderRadius={5}
            maxLength={1}
          />
        </Box>

        <Box style={styles.enableFaceId}>
          <Text color={'white'} paddingTop={11}>
            Enable face ID
          </Text>
          <Switch size="md" marginRight={8} />
        </Box>
      </Box>
      <Box style={styles.boxContainer}>
        <Box style={styles.buttonContainer}>
          <Button style={styles.buttonStyle} onPress={fillPasscodeAndNavigate}>
            <RightArrow width={25} height={25} style={{marginLeft: 5}} fill={'#fff'} />
          </Button>
        </Box>
      </Box>
    </Fragment>
  );
}

const styles = StyleSheet.create({
  enableFaceId: {
    paddingTop: 50,
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
    height: height * 0.05,
    width,
    backgroundColor: '#1886CA',
  },
  buttonContainer: {
    borderColor: '#FFBC05',
    borderWidth: 3,
    marginLeft: 'auto',
    top: -0.05 * height,
    padding: 2,
    borderRadius: 50,
    width: 60,
    height: 60,
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
  },
});
