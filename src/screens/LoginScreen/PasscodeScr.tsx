// import {StyleSheet, Dimensions, TextInput, TouchableOpacity} from 'react-native';
// import React, {Fragment, useState} from 'react';
// import {
//   VStack,
//   Stack,
//   Text,
//   HStack,
//   Input,
//   FormControl,
//   View,
//   Box,
//   Image,
//   Button,
// } from 'native-base';
// import Backdrop from '~components/Backdrop';
// const {height, width} = Dimensions.get('window');
// import Colors from '~theme/Colors';
// import Switch from 'assets/images/switch.svg';
// import Next from 'assets/images/next.svg';
// import {useNavigation} from '@react-navigation/native';
// import {CommonActions} from '@react-navigation/native';
// import {RootStackParamList} from '../../navigation/Navigator';
// import {StackActions} from '@react-navigation/native';

// export default function PasscodeScreen() {
//   const [name, setName] = useState('');

//   const navigation = useNavigation();
//   const goToUserDetailsScreen = () =>
//     navigation.dispatch(CommonActions.navigate({name: 'UserDetailsScreen'}));
//   return (
//     <Fragment>
//       <Box bg={'#1886CA'} height={1000} paddingLeft={10}>
//         <Box
//           paddingTop={200}
//           _text={{
//             fontSize: '3xl',
//             fontWeight: 'medium',
//             color: 'white',
//             letterSpacing: 'lg',
//           }}>
//           Welcome!
//         </Box>
//         <Box
//           paddingTop={1}
//           _text={{
//             fontSize: 'sm',
//             fontWeight: 'medium',
//             color: 'white',
//             letterSpacing: 'lg',
//           }}>
//           Contact Information will be made public
//         </Box>

//         <Box paddingTop={10}>
//           <Text fontSize={'sm'} fontWeight={'medium'} color={'white'} letterSpacing={'lg'}>
//             Profile Picture <Text color={'#B1BFCA'}>(Optional)</Text>
//           </Text>
//           {/* add image picker */}
//           <Input
//             paddingTop={20}
//             variant="underlined"
//             placeholder="Your preffered name"
//             maxW={300}
//             onChangeText={(value) => setName(value)}
//             value={name}
//             style={styles.input}
//           />
//         </Box>

//         <Box paddingTop={300} paddingRight={10}>
//           <Box style={styles.buttonContainer}>
//             <Button
//               style={styles.buttonStyle}
//               onPress={() =>
//                 navigation.dispatch(
//                   CommonActions.navigate({name: 'UserDetailScr', params: {customer_name: name}})
//                 )
//               }>
//               <Image alt="Alternate Text" size="xl" />
//             </Button>
//           </Box>
//         </Box>
//       </Box>
//     </Fragment>
//   );
// }

// const styles = StyleSheet.create({
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

import {StyleSheet, Dimensions, TextInput, TouchableOpacity} from 'react-native';
import React, {Fragment, useState} from 'react';
import {
  VStack,
  Stack,
  Text,
  HStack,
  Input,
  FormControl,
  View,
  Box,
  Image,
  Button,
} from 'native-base';
import Backdrop from '~components/Backdrop';
const {height, width} = Dimensions.get('window');
import Colors from '~theme/Colors';
import Switch from 'assets/images/switch.svg';
import Next from 'assets/images/next.svg';
import {useNavigation} from '@react-navigation/native';
import {CommonActions} from '@react-navigation/native';
import {RootStackParamList} from '../../navigation/Navigator';
import {StackActions} from '@react-navigation/native';
import Upload from '../../../assets/images/send.svg';
import RightArrow from '../../../assets/images/icon_arrow_right.svg';
import {color} from 'react-native-reanimated';

export default function PasscodeScreen() {
  const [name, setName] = useState('');

  const navigation = useNavigation();
  const goToUserDetailsScreen = () =>
    navigation.dispatch(CommonActions.navigate({name: 'UserDetailsScreen'}));

  const uploadPictureHandler = () => {
    console.log('upload button clicked');
  };

  return (
    <Fragment>
      <Box bg={'#1886CA'} height={height * 0.905} paddingLeft={10}>
        <Box
          paddingTop={150}
          _text={{
            fontSize: '3xl',
            fontWeight: 'medium',
            color: 'white',
            letterSpacing: 'lg',
          }}>
          Welcome!
        </Box>
        <Box
          paddingTop={1}
          _text={{
            fontSize: 'sm',
            fontWeight: 'medium',
            color: 'white',
            letterSpacing: 'lg',
          }}>
          Contact Information will be made public
        </Box>

        <Box paddingTop={10}>
          <Text fontSize={'sm'} fontWeight={'medium'} color={'white'} letterSpacing={'lg'}>
            Profile Picture <Text color={'#B1BFCA'}>(Optional)</Text>
          </Text>
          <TouchableOpacity onPress={uploadPictureHandler} style={styles.uploadPictureButton}>
            <Upload />
            <Text style={styles.buttonText}>Upload</Text>
          </TouchableOpacity>
          <Input
            paddingTop={20}
            variant="underlined"
            placeholder="Your preffered name"
            maxW={300}
            onChangeText={(value) => setName(value)}
            value={name}
            style={styles.input}
            isRequired={true}
            color={'white'}
            selectionColor={'white'}
          />
        </Box>
      </Box>
      <Box style={styles.boxContainer}>
        <Box style={styles.buttonContainer}>
          <Button
            style={styles.buttonStyle}
            onPress={() =>
              navigation.dispatch(
                CommonActions.navigate({name: 'UserDetailScr', params: {customer_name: name}})
              )
            }>
            <RightArrow width={25} height={25} style={{marginLeft: 5}} fill={'#fff'} />
          </Button>
        </Box>
      </Box>
    </Fragment>
  );
}

const styles = StyleSheet.create({
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
  input: {
    color: 'white',
  },
  uploadPictureButton: {
    width: 70,
    height: 70,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    backgroundColor: '#70A3F7',
    borderWidth: 1,
    borderColor: '#fafafa',
    marginTop: 20,
    // marginLeft: width * 0.1,
  },
  buttonText: {
    color: Colors.white,
    fontSize: 10,
    // marginTop: '18%',
    // fontFamily: HexaTheme.fonts.RobotoSlabBlack,
  },
});
