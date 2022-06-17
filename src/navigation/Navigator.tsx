import React, {useEffect} from 'react';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '~screens/HomeScreen/HomeScreen';
import BackupScreen from '~screens/Backup/BackupScreen';
import AddContactScreen from '~screens/HomeScreen/AddContactScreen';
import ViewTransactionsScreen from '~screens/HomeScreen/ViewTransactionsScreen';
import SettingsStack from './SettingsStack';
import QRScreen from '~screens/QRScreen/QRScreen';
import PasscodeScreen from '~screens/LoginScreen/PasscodeScreen';
import SuccessScreen from '~screens/LoginScreen/SuccessScreen';
import UserDetailsScreen from '~screens/LoginScreen/UserDetailsScreen';
import Scanner from '~screens/Scanner/Scanner';
import Slider from '~screens/IntroScreen/Slider';
import PasscodeScr from '~screens/LoginScreen/PasscodeScr';
import UserDetailScr from '~screens/LoginScreen/UserDetailScr';
import {UserLoginScreen} from '~screens/LoginScreen/UserLoginScreen';
import {useSelector} from 'react-redux';

export type RootStackParamList = {
  Home: {prevS: string | null};
  IntroScreens: undefined;
  PasscodeScreen: undefined;
  UserDetailsScreen: undefined;
  UserLoginScreen: undefined;
  SettingStack: undefined;
  AddContact: undefined;
  ViewTransactions: undefined;
  Backup: undefined;
  QrScanner: undefined;
  Scanner: undefined;
};

const defaultTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'white',
  },
};
const Navigator = () => {
  const Stack = createNativeStackNavigator();

  const walletSetupCompleted = useSelector((state) => state.setupAndAuth.walletSetupCompleted);

  return (
    <NavigationContainer theme={defaultTheme}>
      <Stack.Navigator
        initialRouteName={walletSetupCompleted ? 'UserLoginScreen' : 'IntroScreens'}
        screenOptions={{headerShown: false, animation: 'slide_from_right'}}>
        <Stack.Screen name="IntroScreens" component={Slider} />
        <Stack.Screen name="PasscodeScr" component={PasscodeScr} />
        <Stack.Screen name="UserDetailScr" component={UserDetailScr} />
        <Stack.Screen name="UserDetailsScreen" component={UserDetailsScreen} />
        <Stack.Screen name="SuccessScreen" component={SuccessScreen} />
        <Stack.Screen name="UserLoginScreen" component={UserLoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="SettingStack" component={SettingsStack} />
        <Stack.Screen name="AddContact" component={AddContactScreen} />
        <Stack.Screen name="ViewTransactions" component={ViewTransactionsScreen} />
        <Stack.Screen name="Backup" component={BackupScreen} />
        <Stack.Screen name="QrScanner" component={QRScreen} />
        <Stack.Screen name="Scanner" component={Scanner} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
