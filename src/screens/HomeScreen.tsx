import React, {Fragment} from 'react';
import TestingSVG from 'assets/images/beardo.svg';
import {SafeAreaView, StyleSheet, View, Dimensions, StatusBar, ViewBase} from 'react-native';
import Backdrop from '~components/Backdrop';
const {height} = Dimensions.get('window');
import ProfileCard from '~components/ProfileCard';
import QrScanner from '~components/QrScanner';

const HomeScreen = () => {
  return (
    <Fragment>
      <Backdrop height={height * 0.7} />
      <ProfileCard />
      <QrScanner />
    </Fragment>
  );
};

export default HomeScreen;

// import React from 'react';
// import { SafeAreaView, StyleSheet, View, Dimensions, StatusBar, ViewBase } from 'react-native';
// import { Input, ScrollView, Text, useColorMode, useColorModeValue } from 'native-base';
// import {
//   widthPercentageToDP as wp,
//   heightPercentageToDP as hp,
// } from 'react-native-responsive-screen';
// import ActionsCards from './ActionsCards';

// import Colors from '../common/Colors';

// import { Contacts } from '../assets/svgs/contacts.svg';
// import Fonts from '../common/Fonts';
// import BackDrop from '../common/BackDrop';

// /* get the height & width of the user's device */
// const windowWidth = Dimensions.get('window').width;
// const windowHeight = Dimensions.get('window').height;

// const HomeScreen = () => {
//   const { colorMode, toggleColorMode } = useColorMode();

//   return (
//     <ScrollView>
//       <SafeAreaView style={styles.sectionContainer}>
//         <StatusBar backgroundColor={Colors.blue} barStyle="light-content" />
//         <View>
//           {/* <Text style={styles.sectionTitle} onPress={toggleColorMode} color={useColorModeValue("light.blue", "dark.black")} >{colorMode}</Text> */}
//           <View style={styles.blueScrollView}>
//             {/* <BackDrop /> */}
//             <View style={styles.userContainer}>
//               <View style={styles.userImage}>
//                 {/* <Contacts height={10}> */}
//                 <Text>Image</Text>
//               </View>
//               <View style={{ flexDirection: 'column' }}>
//                 <Text style={styles.userName} color={Colors.white} fontSize={14}>
//                   Arya Stark
//                 </Text>
//                 <Text style={styles.userName} color={Colors.white} fontSize={11}>
//                   Personal Profile
//                 </Text>
//               </View>
//               <Text style={styles.qrScanner}>QR</Text>
//             </View>
//             <View style={styles.walletContainer}>
//               <Text style={styles.walletLogo}>w/logo</Text>
//               <Text style={styles.balance}>balance</Text>
//             </View>
//             <View style={styles.contactsContainer}>
//               <View>
//                 <Text>Image</Text>
//                 <Text style={styles.contactName}>Name</Text>
//               </View>
//               <View>
//                 <Text>Image</Text>
//                 <Text style={styles.contactName}>Name</Text>
//               </View>
//               <View>
//                 <Text>Image</Text>
//                 <Text style={styles.contactName}>Name</Text>
//               </View>
//               <View>
//                 <Text>Image</Text>
//                 <Text style={styles.contactName}>Name</Text>
//               </View>
//               <View>
//                 <Text>Image</Text>
//                 <Text style={styles.contactName}>Name</Text>
//               </View>
//             </View>
//             <View style={styles.cardContainer}>
//               <View style={styles.actionCards}>
//                 <ActionsCards />
//                 <ActionsCards />
//                 <ActionsCards />
//               </View>
//               <View style={styles.actionCards}>
//                 <ActionsCards />
//                 <ActionsCards />
//                 <ActionsCards />
//               </View>
//               {/* </View> */}
//             </View>
//           </View>
//         </View>
//       </SafeAreaView>
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   sectionContainer: {
//     flexDirection: 'column',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//   },
//   sectionTitle: {
//     fontSize: 18,
//     fontWeight: '700',
//   },
//   blueScrollView: {
//     backgroundColor: Colors.blue2,
//     width: wp('100%'),
//     height: hp('62%'),
//     resizeMode: 'contain',
//     borderBottomLeftRadius: wp(8),
//   },
//   userContainer: {
//     flexDirection: 'row',
//     justifyContent: 'flex-start',
//     marginTop: '11%',
//     marginLeft: '7%',
//   },
//   userImage: {
//     marginRight: '5%',
//     marginLeft: '2%',
//   },
//   userName: {
//     fontFamily: Fonts.RobotoSlabBold,
//     marginLeft: '1%',
//   },
//   qrScanner: {
//     marginLeft: '45%',
//     color: Colors.white,
//   },
//   walletContainer: {
//     flexDirection: 'row',
//     justifyContent: 'flex-start',
//     marginTop: hp('20%'),
//   },
//   walletLogo: {
//     color: Colors.white,
//     marginLeft: wp('8%'),
//   },
//   balance: {
//     color: Colors.white,
//     fontSize: 20,
//     marginLeft: wp('2%'),
//   },
//   contactsContainer: {
//     marginVertical: wp('36%'),
//     justifyContent: 'space-evenly',
//     flexDirection: 'row',
//   },
//   contactName: {
//     fontFamily: Fonts.RobotoSlabRegular,
//     fontSize: 11,
//     color: Colors.white,
//   },
//   cardContainer: {
//     flexDirection: 'column',
//     alignItems: 'center',
//     justifyContent: 'space-evenly',
//   },
//   actionCards: {
//     flexDirection: 'row',
//     // justifyContent: 'space-evenly',
//   },
// });
